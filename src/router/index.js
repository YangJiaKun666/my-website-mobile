// == 路由表，所有的页面路由都在此处进行配置 ==
// 首页组件
import Home from '../pages/home/index'
// 详情页组件
import Detail from '../pages/detail/index'

const routes = [
    {
        path: '/home',
        component: Home,
        name: '首页',
    },
    {
        path: '/detail',
        component: Detail,
        name: '详情',
    },
]

export default routes
