import React, { useContext, createContext, useState } from 'react';
import {Button} from 'antd';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/App.less';
// import loadable from '@loadable/component'

import Header from "./components/Header";
import HomeComponent from './modules/HomeCom';
import AboutComponent from './modules/AboutCom';
import NoMatch from './pages/views/NoMatch';
import FirstScreen from './components/FirstScreen';
import {person} from "./interfaces/common";
import LoginCom from "./modules/LoginCom";

import { getToken } from  './util/manageStorage'




export interface user extends person{
    author: number;
    authorName: string;
    creator: string;
    createTime: string;
    lastModifyTime: string;
    modifier: string;
}


function App() {
    const auth = getToken();
    return (
        <div className="App">
            <Router>
                <Route path='/' component={!auth ? LoginCom : FirstScreen} />
            </Router>
        </div>
    );
}

export default App;


