<template>
    <div class="dialogs">
        <div v-for="item in dialogs" class="dialogs-wrapper">
            <div class="avatar">
                <img :src="item.avatar">
            </div>
            <div class="center row-start">
                <div class="content">{{item.content}}</div>
                <div class="name column-end">{{item.name}}</div>
            </div>
            <div class="time">{{item.time}}</div>
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
        }
    }
</script>

<style scoped>
    .dialogs{
        height: 700px;
        background-color: #2c3e50;
        padding: 10px;
        color: white;
    }
    .dialogs-wrapper{
        display: flex;

        margin-bottom: 10px;
        border-bottom: 1px solid #ffcd32;
    }
    .dialogs-wrapper .avatar img{
        width:50px;
        height: 50px;
        border-radius: 50%;
    }
    .dialogs .dialogs-wrapper .avatar{
        width:60px;
        margin-bottom: 10px;
    }
    .dialogs .dialogs-wrapper .center{
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
    }
    .dialogs .center .content{
        flex: 1;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        width:200px;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height: 36px;
    }
    .dialogs .center .name{
        flex: 1;
    }
    .dialogs .dialogs-wrapper .time{
        width:40px;
        line-height: 64px;
    }
</style>