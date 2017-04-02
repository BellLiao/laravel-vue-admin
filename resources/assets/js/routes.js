import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Table from './views/Table.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: 'Administración',
        iconCls: 'el-icon-message',
        children: [
            { path: '/users', component: Table, name: 'Usuarios' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Home',
        iconCls: 'fa fa-id-card-o',
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
