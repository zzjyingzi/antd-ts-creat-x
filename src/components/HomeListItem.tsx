import * as React from 'react'
import { single } from '../interfaces/home'
import { useState } from 'react';

// export default class HomeListItem extends React.Component<single> {
//     constructor(props:any) {
//         // console.log('在实例化时执行的函数');
//         super(props);
//     }
//
//     // render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
//     //     console.log(super);
//     //     return super.render();
//     // }
//
//     render(){
//         const { id, name, salesVolume } = this.props;
//         return (
//             <li key={id}>{name}<div>{salesVolume}</div></li>
//         );
//     }
// }

export default function (item: single){
    const { id, name, salesVolume } = item;
    return(
        <li key={id}>{name}<div>{salesVolume}</div></li>
    )
}
