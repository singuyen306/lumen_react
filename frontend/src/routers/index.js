import {
    JobListContainer, JobDetailContainer, JobAddContainer,
    CompanyDetailContainer, CompanyListContainer, CompanyAddContainer,
    CandidateListContainer, CandidateDetailContainer, CandidateAddContainer,
    DashboardContainer, PermissionListContainer
} from '../containers';

const routes = [
    { path: '/dashboard', name: 'Dashboard', component: DashboardContainer },
    { path: '/companies', exact: true, name: 'CompanyList', component: CompanyListContainer},
    { path: '/companies/add', name: 'CompanyAdd', component: CompanyAddContainer},
    { path: '/companies/detail/:id', name: 'CompanyDetail', component: CompanyDetailContainer},
    { path: '/candidates', exact: true, name: 'CandidateList', component: CandidateListContainer},
    { path: '/candidates/add', name: 'CandidateAdd', component: CandidateAddContainer},
    { path: '/candidates/detail/:id', name: 'CandidateDetail', component: CandidateDetailContainer},
    { path: '/jobs', exact: true, name: 'JobList', component: JobListContainer},
    { path: '/jobs/add', name: 'JobAdd', component: JobAddContainer},
    { path: '/jobs/detail/:id', name: 'JobDetail', component: JobDetailContainer},
    { path: '/permissions', exact: true, name: 'PermissionList', component: PermissionListContainer},
];

export default routes;