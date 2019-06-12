<template>
    <div class="focus" >
        <div class="wrapper">
            <div class="left-icon">
                <img src="../../assets/img/icon.png">
            </div>
            <div class="right-info" >
                <div>主播名字id： nimen</div>
                <div>房间号： 12333434</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "focus",
        data() {

        }
    }
</script>

<style scoped>
    .focus{
        height: 700px;
        display: flex;
        color: white;
    }
    .wrapper{
        display: flex;
        padding: 15px;
        margin-bottom: 1px solid white;
        height: 100px;
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
    }


</style>