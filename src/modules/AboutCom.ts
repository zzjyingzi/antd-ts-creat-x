import { connect } from "react-redux";
import About from "../pages/views/About";
import { listAdd, loadData } from '../actions/about'


// 以下输出模块查看尖括号执行组件的状况


const mapStateToProps = (state: any, ownProps: any)=>{
    return {
      aboutTodoList: state.about.aboutTodoList,
      id: ownProps.match.params.id || 1
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any)=>{
    return {
        addCreate: ()=> dispatch(listAdd('add')),
        loadData: ()=> dispatch(loadData('loadData')),
    }
};



const AboutCom = connect(mapStateToProps, mapDispatchToProps)(About);




export default AboutCom;
