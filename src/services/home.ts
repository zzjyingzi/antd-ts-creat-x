import { fetch } from '../util/axios.config';

export default function getHomeData(params: object) {
    return fetch('home/', {...params}).then(function (response) {
        return response;
    }).catch(function (error: string) {
        console.log('request error is:', error);
    })
}
