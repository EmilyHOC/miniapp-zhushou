import Vue from 'vue';
import Router from 'vue-router'
import focus from '../components/focus/focus'
import dialogs from '../components/dialogs/dialogs'
import personal from '../components/personal/personal'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/focus',
            component: focus
        },
        {
            path: '/dialogs',
            component: dialogs
        },
        {
            path: '/personal',
            component: personal
        }

    ]
})


