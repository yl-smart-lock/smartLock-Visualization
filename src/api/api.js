import {
    httpGet,
    httpPut,
    httpPatch,
    httpPost,
    httpDelete,
} from '../axios/index.js'

export const login = p => httpPost(`/api/v1/user/login/`, p);

// 账号相关接口
export const get_user_info = p => httpGet(`/api/v1/user/me/`);
export const get_zone_conf = p => httpGet(`/api/v1/management/user/zone-conf/`);
export const get_zone_data = p => httpGet(`/api/v1/management/user/zone-data/`);

export const get_chart_data = p => httpGet(`/api/v1/management/lock/lock/chart-data/`);
export const get_lock_data = p => httpGet(`/api/v1/management/lock/lock/`);


export const get_current_data = p => httpGet(`/api/v1/management/lock/lock/current-data/`);
export const set_teacher_kind = p => httpPut(`/api/v1/user/teacher/set_teacher_kind/`, p);
export const teacher_bind_class = p => httpPost(`/api/v1/user/teacher/bind_clazz/`, p);
