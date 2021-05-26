import * as React from 'react'
import { useState, useEffect  } from 'react';

import Header from "./Header";
import {Route, Switch} from "react-router-dom";
import HomeComponent from "../modules/HomeCom";
import AboutComponent from "../modules/AboutCom";
import NoMatch from "../pages/views/NoMatch";






export default function FirstScreen ({children, ...rest}: any){
        // children 预留首页模块的位置
    // 首页内容

    return(
        <Route>
            <Route component={Header} />
            <Switch>
                {/*<Route context={} setState={} forceUpdate={} render={} props={} state={} refs={} />*/}
                <Route exact path='/' component={HomeComponent}/>
                <Route exact path='/about' component={AboutComponent}/>
                <Route component={NoMatch}/>

                {/*
                                            React.Suspense与 nomatch无法共同使用，报错
                                        */}
                {/*<React.Suspense fallback={<div>Loading...</div>}>*/}
                {/*    <Route path='/infor' component={InforComponent} />*/}
                {/*</React.Suspense>*/}
            </Switch>
        </Route>
    )
}

