import React, { useContext, createContext, useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from "react-redux";



import {login, logout, saveState } from "../actions/login";


// 样式可通过屏幕尺寸变化另行整理其特征，需要在home或者渲染前获取相关屏幕信息参数
// 屏幕横款分格的特征很有意义
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

// 初始化用户信息数据，如果数据量庞大，需要另开文件整理初始数据问题，从dva获得特征
export const initialUserState = {
    user: null,
    passWord: null,
    userId: null
};

const mapStateToProps = (state: any, ownProps: any)=>{
    // 需要检查 state.login.user 是否有属性
    let { userName, passWord, userId }= state.login.user ? state.login : initialUserState;
    return {
        userName: userName,
        passWord: passWord,
        userId: userId
    }
};


const mapDispatchToProps = (dispatch: any, ownProps: any)=>{
    const { userName, passWord, userId, changeLonginStatus } = ownProps;
    return {
        login: ()=> dispatch(login('login', {userName, passWord, changeLonginStatus})),
        logout: ()=> dispatch(logout('logout',{ userId })),
        saveState: ()=> dispatch(saveState('saveState')),
    }
};


function LoginFn(props: any){
    // let [user, setUser] = useState({});
    const onFinish = (values: any) => {
        props.login(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        props.login();
    };

    return (<div className={"login-bg"}>
        <section className={'con'}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </section>
    </div>)
}

const LoginCom = connect(mapStateToProps, mapDispatchToProps)(LoginFn);




export default LoginCom;
