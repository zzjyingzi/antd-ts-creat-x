import * as React from "react";

interface single {
    id: number;
    name: string;
}


interface abProp{
    // 限定传入参数格式
    addCreate: any;
    loadData: any;
    aboutTodoList: Array<single>;
    id: any
}




class About extends React.Component <abProp>{
    render() {
        const {loadData, aboutTodoList, id}  = this.props;
        return (
            <section>
                <div onClick={()=>loadData()}>{id}</div>
                <ul>
                    {aboutTodoList && aboutTodoList.map((item: any, index: number)=><li key={index}>{item.name}</li>)}
                </ul>
            </section>
        )
    }
}



export default About

