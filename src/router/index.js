import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决导航栏中的vue-router重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('../views/home/Home.vue');
const Construction = () => import('../views/construction/Construction.vue');
const Technology = () => import('../views/technology/Technology.vue')
const System = () => import('../views/system/System.vue');
const SchoolArchives = () => import('../views/schoolArchives/SchoolArchives.vue');
const Download = () => import('../views/download/Download.vue');
const AddressBook = () => import('../views/addressBook/AddressBook.vue');

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '南京警察学院'
        }
    },
    {
        path: '/construction',
        component: Construction,
        meta: {
            title: '学校建设-南京警察学院'
        }
    },
    {
        path: '/technology',
        component: Technology,
        meta: {
            title: '学校科技-南京警察学院'
        }
    },
    {
        path: '/system',
        component: System,
        meta: {
            title: '学校制度-南京警察学院'
        }
    },
    {
        path: '/schoolArchives',
        component: SchoolArchives,
        meta: {
            title: '学校档案-南京警察学院'
        }
    },
    {
        path: '/download',
        component: Download,
        meta: {
            title: '资料下载-南京警察学院'
        }
    },
    {
        path: '/addressBook',
        component: AddressBook,
        meta: {
            title: '学校通讯录-南京警察学院'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
})

export default router
