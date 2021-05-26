import React, { useContext, createContext, useState } from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/App.less';
// import loadable from '@loadable/component'

import FirstScreen from './components/FirstScreen';
import {person} from "./interfaces/common";
import LoginCom from "./modules/LoginCom";


import store from "./store";
import {getToken} from "./util/manageStorage";
import Header from "./components/Header";
import HomeComponent from "./modules/HomeCom";
import AboutComponent from "./modules/AboutCom";
import NoMatch from "./pages/views/NoMatch";



export interface user extends person{
    author: number;
    authorName: string;
    creator: string;
    createTime: string;
    lastModifyTime: string;
    modifier: string;
}


function App(props: any) {
   const auth = getToken();
   //  const authX: any = store.getState();
   //
   //  const auth = authX.login.user["userName"] && authX.login.user["userId"];
    return (
        <div className="App">
            <Router>
                <Route component={Header} />
                <Switch>
                    {/*<Route context={} setState={} forceUpdate={} render={} props={} state={} refs={} />*/}
                    <Route exact path='/login' component={LoginCom}/>


                    <FirstScreen auth={auth}>
                        <Route exact path='/about' component={AboutComponent}/>
                        <Route exact path='/' component={HomeComponent}/>
                        <Route component={NoMatch}/>
                    </FirstScreen>


                    {/*
                                            React.Suspense与 nomatch无法共同使用，报错
                                        */}
                    {/*<React.Suspense fallback={<div>Loading...</div>}>*/}
                    {/*    <Route path='/infor' component={InforComponent} />*/}
                    {/*</React.Suspense>*/}
                </Switch>
            </Router>
        </div>
    );
}

export default App;


