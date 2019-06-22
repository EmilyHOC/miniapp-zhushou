<template>
    <div class="dialogs" :style="{height: height + 'px'} ">
        <div v-for="(item,index) in dialogs" class="dialogs-wrapper" @click="toDetail(index)">
            <div class="avatar">
                <img :src = "item.avatar">
            </div>
            <div class="contentbox">
                <div class="center">
                    <div class="name column-end">{{item.name}}</div>
                    <div class="content">{{item.content}}</div>
                </div>
                <div class="mount">
                    <div class="time">{{item.time}}</div>
                    <div class="count">2</div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import { message } from '../../../mock/message'
    export default {
        name: "dialogs",
        data(){
            return {
                dialogs: message
            }
        },
        props: {
            height: {
                type: Number,
                default: 667
            }
        },
        methods: {
            toDetail(index) {
                this.$router.push({
                    path: '/messages',
                    query: {
                        id: index
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .dialogs{
        background-color: #eeeeee;
        padding: 10px;
    }
    .dialogs-wrapper{
        display: flex;
        margin-bottom: 15px;
    }
    .dialogs-wrapper .avatar{
        width: 80px;
    }
    .dialogs-wrapper .avatar img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .contentbox{
        flex: 1;
        border-bottom: 1px solid #e6e6e6;
    }
    .contentbox .center{
        float: left;
        text-align: left;
    }
    .contentbox .content{
        color: #a8a8a8;
    }
    .contentbox .name{
        color: #161616;
        font-size: 18px;
    }
    .contentbox .mount{
        float: right;
    }
    .contentbox .mount .time{
        color: #ababab;
    }
    .contentbox .mount .count{
        width: 22px;
        height: 22px;
        border-radius: 11px;
        background-color: #fc3327;
        color: white;
        font-size: 18px;
    }
</style>