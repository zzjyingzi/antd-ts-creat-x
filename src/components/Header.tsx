import React from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import {getToken} from "../util/manageStorage";
import LoginCom from "../modules/LoginCom";
const { SubMenu } = Menu;

class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = (e: any) => {
        this.setState({ current: e.key });
    };

    render(){
        const auth = getToken();
        // 未登录
        if (!auth){
            return (<div />);
        }


        const { current } = this.state;
        return(
            <section>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="home" >
                        <Link to="/">To Home</Link>
                    </Menu.Item>
                    <Menu.Item key="about" >
                        <Link to="/about">To About</Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="protected">
                        <Link to="/protected">To protected</Link>
                    </Menu.Item>
                    <Menu.Item key="fine">
                        <Link to="/fine">To fine</Link>
                    </Menu.Item>
                </Menu>
            </section>
        )
    }
}


export default Header;
