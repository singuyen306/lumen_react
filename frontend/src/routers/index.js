import App from "../App";
import {
    Dashboard,
    JobList, JobDetail, JobAdd,
    CandidateList, CandidateDetail, CandidateAdd,
    CompanyList, CompanyDetail, CompanyAdd,
    Permission
} from '../components/pages';

const routes = [
    { path: '/', exact: true, name: 'App', component: App },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/companies', exact: true, name: 'CompanyList', component: CompanyList},
    { path: '/companies/add', name: 'CompanyAdd', component: CompanyAdd},
    { path: '/companies/detail/:id', name: 'CompanyDetail', component: CompanyDetail},
    { path: '/candidates', exact: true, name: 'CandidateList', component: CandidateList},
    { path: '/candidates/add', name: 'CandidateAdd', component: CandidateAdd},
    { path: '/candidates/detail/:id', name: 'CandidateDetail', component: CandidateDetail},
    { path: '/jobs', exact: true, name: 'JobList', component: JobList},
    { path: '/jobs/add', name: 'JobAdd', component: JobAdd},
    { path: '/jobs/detail/:id', name: 'JobDetail', component: JobDetail},
    { path: '/permissions', exact: true, name: 'PermissionList', component: Permission},
];

export default routes;