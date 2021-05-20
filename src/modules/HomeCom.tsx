import * as React from "react";
import { connect } from "react-redux";

// 接口
import {abProp} from '../interfaces/home';
// actions
import { loadHomeData, addOne, deleteById, modifyById, findByName, clearHomeData } from '../actions/home';
// components
import Home from "../pages/views/Home";





// 以下输出模块查看尖括号执行组件的状况


const mapStateToProps = (state: any, ownProps: any)=>{
  return {
      todoList: state.home.todoList,
      id: 1
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any)=>{
    const { id, params } = ownProps;
    return {
        loadData: ()=> dispatch(loadHomeData('homeLoadData')),
        clear: ()=> dispatch(clearHomeData('homeClearData')),
        addOne: ()=> dispatch(addOne('homeAddData')),
        deleteById:()=>dispatch(deleteById('homeDeleteData', id)),
        modifyById:()=>dispatch(modifyById('homeModifyData', id)),
        findByName:()=>dispatch(findByName('homeFindData', params)),
    }
};



class HomeContainer extends React.Component<abProp> {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        const { todoList, loadData}  = this.props;
        return (<div>
                <Home loadData={loadData} todoList={todoList} />
            <footer>底部</footer>
        </div>)
    }
}




// Home 需要独立到本页而不是再引入？？？
// 然后再使用高阶组件？
const HomeCom = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);




export default HomeCom;
