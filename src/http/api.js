import {
    // get,
    post,
    // put,
    // del
} from '../http/http';

// export const getList = params => get('home', params);

// mock示例
export const getMockList = params => post('home', params);