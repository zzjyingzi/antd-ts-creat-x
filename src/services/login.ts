import { post, fetch } from '../util/axios.config';
import {setToken} from "../util/manageStorage";

export default function loginData(params: object) {
    return post('login/', {...params}).then(function (response) {
        // 因为通过token来判断，直接reload就能达到效果，如果是hash的/login，可以用hash=，如果是browserRouter可以用redirect
        // reload的优势：不url无变化，劣势：刷新重载，token判断上会比较简洁，过期跳转也会比较容易
        // hash
        // console.log(response);
        // window.location.hash = "";
        window.location.reload();
        setToken(response.data);
        return response;
    }).catch(function (error: string) {
        console.log('request error is:', error);
    })
}
