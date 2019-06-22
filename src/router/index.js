import Vue from 'vue';
import Router from 'vue-router'
import tietu from '../components/tietu/tietu'
import dialogs from '../components/dialogs/dialogs'
import personal from '../components/personal/personal'
import questions from '../components/questions/questions'
import zanshang from '../components/zanshang/zanshang'
import messages from '../components/messages/messages'
import billbord from '../components/billborad/billbord'

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
            path: '/messages',
            component: messages
        },
        {
            path: '/zanshang',
            component: zanshang
        },
        {
            path: '/billbord',
            component: billbord
        },
        {
            path: '/questions',
            component: questions
        }
    ]
})


