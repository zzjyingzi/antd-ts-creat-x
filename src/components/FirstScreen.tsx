import * as React from 'react'
import { useState, useEffect  } from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';


import LoginCom from "../modules/LoginCom";



export default function FirstScreen ({children, auth, ...rest}: any){
        // children 预留首页模块的位置
    // 首页内容
    const authType:any = auth;
    console.log(window.location)
    return(
        <Route
            {...rest}
            render={({ location }) =>
                authType ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

