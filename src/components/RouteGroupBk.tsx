import * as React from 'react'
import { useState, useEffect  } from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import store from '../store';

export default function RouteGroup ({children, ...rest}: any){
    const auth = true;

    return(
        <div>
            {/*<Route {...rest} render = {({location}:any)=>*/}
            {/*    xc ? (*/}
            {/*        children*/}
            {/*    ) : (*/}
            {/*        <Redirect*/}
            {/*            to={{*/}
            {/*                pathname: "/login",*/}
            {/*                state: { from: location }*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    )*/}
            {/*} />*/}


            {auth ? (children):(
                <Redirect
                    to={{
                        pathname: "/login"
                    }}
                />
            )}
            {}
        </div>
    )
}

