import { fetch } from '../util/axios.config';

export default function getAboutData(params: object) {
    return fetch('about/', {...params}).then(function (response) {
        return response;
    }).catch(function (error: string) {
        console.log('request error is:', error);
    })
}
