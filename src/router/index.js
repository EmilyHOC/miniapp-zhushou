import Vue from 'vue';
import Router from 'vue-router'
import tietu from '../components/tietu/tietu'
import dialogs from '../components/dialogs/dialogs'
import personal from '../components/personal/personal'
import questions from '../components/questions/questions'
import lookzhibo from '../components/look-zhibo/look-zhibo'
import zanshang from '../components/zanshang/zanshang'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/tietu',
            component: tietu
        },
        {
            path: '/dialogs',
            component: dialogs
        },
        {
            path: '/personal',
            component: personal
        },
        {
            path: '/questions',
            component: questions
        },
        {
            path: '/lookzhibo',
            component: lookzhibo
        },
        {
            path: '/zanshang',
            component: zanshang
        }

    ]
})


