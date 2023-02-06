import {
    httpGet,
    httpPut,
    httpPatch,
    httpPost,
    httpDelete,
} from '../axios/index.js'


export const get_lock_list= p => httpGet(`/api/v1/management/lock/lock/?page_size=99`);
export const get_user_info = p => httpGet(`/api/v1/user/info/`);


export const login = p => httpPost(`/api/v1/user/login/`, p);
export const login_out = p => httpGet(`/api/v1/user/login/`);



export const get_type_count = p => httpGet(`/api/v1/management/lock/lock/type-count/`);
export const get_rent_count = p => httpGet(`/api/v1/management/lock/lock/rent-count/`);
export const get_today_count = p => httpGet(`/api/v1/management/lock/lock/today-count/`);

export const get_identity_count = p => httpGet(`/api/v1/management/user/identity-count/`);

export const get_mobile_count = p => httpGet(`/api/v1/management/user/multi-mobile-count/`);


// 账号相关接口
export const get_zone_conf = p => httpGet(`/api/v1/management/user/zone-conf/`);
export const get_zone_data = p => httpGet(`/api/v1/management/user/zone-data/`);

export const get_chart_data = p => httpGet(`/api/v1/management/lock/lock/chart-data/`);
export const get_lock_data = p => httpGet(`/api/v1/management/lock/lock/`);


export const get_current_data = p => httpGet(`/api/v1/management/lock/lock/current-data/`);
export const set_teacher_kind = p => httpPut(`/api/v1/user/teacher/set_teacher_kind/`, p);
export const teacher_bind_class = p => httpPost(`/api/v1/user/teacher/bind_clazz/`, p);