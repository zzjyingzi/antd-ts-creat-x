import * as React from "react";
import HomeListItem from "../../components/HomeListItem";

import { list } from '../../interfaces/home';
import Retext from "../../components/Retext";




class Home extends React.Component <list> {
    componentDidMount() {
        if(!this.props.todoList.length){
            this.props.loadData();
        }
    }

    render() {
        const { todoList }  = this.props;



        return (<section>
            <header>
            {/*  相关头，添加/修改/删除（全部删除）/全选/  */}
                I'm 这 ADMF。
            </header>
            {this.props.children}
            <ul>
                {todoList.map((item: any)=><HomeListItem key={item.id} id={item.id} name={item.name} salesVolume={item.salesVolume} />)}
            </ul>
            <aside>
                <Retext/>
            </aside>
        </section>)
    }
}

// 输出jsx组件
// console.log(Home); // 输出一个函数
// console.log(<Home />); // 输出函数执行后返回的对象
export default Home

export interface Action {
    type: any;
}
export type Reducer<S> = <A extends Action>(state: S, action: A) => S;


