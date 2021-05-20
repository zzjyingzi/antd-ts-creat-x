import { person } from './common'

export interface loginType{
    name: string;
    passWord: string;
}

export interface user extends person{
    author: number;
    authorName: string;
    creator: string;
    createTime: string;
    lastModifyTime: string;
    modifier: string;
}
