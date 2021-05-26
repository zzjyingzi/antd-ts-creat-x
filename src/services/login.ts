import { post, fetch } from '../util/axios.config';
import {setToken} from "../util/manageStorage";

export default function loginData(params: object) {
    return post('login/', {...params}).then(function (response) {
        window.location.reload();
        setToken(response.data);
        return response;
    }).catch(function (error: string) {
        console.log('request error is:', error);
    })
}
