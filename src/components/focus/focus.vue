<template>
    <div class="focus" >
        <div class="wrapper" v-for="item in focus">
            <div class="left-icon">
                <img src="../../assets/img/icon.png">
            </div>
            <div class="right-info" >
                <div>主播名字id： {{item.name}}</div>
                <div>房间号： {{item.roomnum}}</div>
            </div>
        </div>

    </div>
</template>

<script>
    import { myfocus } from '../../../mock/focus';
    export default {
        name: "focus",
        data() {
            return {
                focus: myfocus
            }
        }
    }
</script>

<style scoped>
    .focus{
        height: 700px;
        display: flex;
        color: white;
        flex-direction: column;
    }
    .wrapper {
        display: flex;
        padding: 15px;
    }
    .left-icon{
        width: 60px;
    }
    .left-icon img{
        width:40px;
        height: 40px;
    }
    .right-info{
        flex: 1;
        margin-left: 30px;
        text-align: left;
    }


</style>