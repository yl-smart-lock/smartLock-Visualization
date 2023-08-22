import {
    httpGet,
    httpPut,
    httpPatch,
    httpPost,
    httpDelete,
} from '../axios/index.js'


export const login = p => httpPost(`/api/v1/user/user-login`,p);
export const get_jiedui = p => httpGet(`/api/v1/online/`);
export const get_tutoring = p => httpGet(`/api/v1/tutoring/`);
export const get_topic_new = p => httpGet(`/api/v1/topic_new/`);
export const get_src_sum = p => httpGet(`/api/v1/src-sum/`);
export const get_agency_reports= p => httpGet(`/api/v1/agency_reports/`);
export const get_contact_list= p => httpGet(`/api/v1/contact_list/`);
export const get_star_level= p => httpGet(`/api/v1/star_level/`);
export const get_task_time= p => httpGet(`/api/v1/task_time/`);
export const get_src_view= p => httpGet(`/api/v1/src-view/`);

export const get_src_dl= p => httpGet(`/api/v1/src-dl/`);
export const get_getKuang= p => httpGet(`/api/v1/ltf/proxy_get/api/v1/school-service/school/search-school-statistics-list?educationBureauId=21&pageSize=500&semesterId=145`);


export const get_activity= p => httpGet(`/api/v1/activity/`);
export const get_agency= p => httpGet(`/api/v1/agency/`);
export const get_agency_type= p => httpGet(`/api/v1/agency_type/`);

export const get_reports_add= p => httpGet(`/api/v1/reports_add/`);

export const get_reports_total= p => httpGet(`/api/v1/reports_total/`);

export const get_reports_latest= p => httpGet(`/api/v1/reports_latest/`);
export const get_visitors= p => httpGet(`/api/v1/visitors/`);
export const get_visitors_day= p => httpGet(`/api/v1/visitors-day/`);

export const get_contact_rank =  p => httpGet(`/api/v1/contact_rank/`);

export const get_task_visitors_day =  p => httpGet(`/api/v1/task-visitors-day/`);
export const get_task_visitors =  p => httpGet(`/api/v1/task-visitors/`);
export const get_reports_num =  p => httpGet(`/api/v1/reports_num/`);




