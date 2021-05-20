import * as React from 'react'
import { useState,  } from 'react';
import { Button } from 'antd';
import {useHistory} from "react-router-dom";


export default function Retext (props: any){ //  Retext({ children, ...rest }) 拿到children和其余的属性
    const [ user, setUser ] = useState(false);

    const st = ()=>{
        setUser(!user);
    };

    //console.log(useHistory());
    // 返回包含location及url操作的对象
    //block：fun(prompt)
    // createHref: ƒ createHref(location)
    // go: ƒ go(n)
    // goBack: ƒ goBack()
    // goForward: ƒ goForward()
    // length: 3
    // listen: ƒ listen(listener)
    // location: {pathname: "/home", search: "", hash: "", state: undefined}
    // push: ƒ push(path, state)
    // replace: ƒ replace(path, state)

    return(
        <div>
            <Button onClick={()=>st()}>显示user</Button>
            {user && <div>正文123456</div>}
        </div>
    )
}

