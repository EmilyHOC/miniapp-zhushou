<template>
<div class="tietu">
    <div class="tietu-container">
        <div class="myavatar-wrapper">
            <p>头像</p>
            <div class="top">
                <span class="gaizi" id="beijing" >
                    <img :src="imgData[index]" v-if="index > 0">
                </span>
                <img src="../../assets/img/logo.png" class="avatar">
            </div>
        </div>
    </div>
    <div class="shezhi">
        <div class="left">
            <i class="iconfont icon-shezhi"></i>
        </div>
        <div class="produce">点击下列贴图生成新头像</div>
        <div class="btn">
            <div>生成</div>
        </div>
    </div>
    <div class="tietu">
        <div class="avatar-list">
            <li>
                <span class="niao">
                    <img src="../../assets/img/avatar1.png" @click="handleClick(1)">
                    <p>火烈鸟</p>
                </span>
                <span class="huli">
                    <img src="../../assets/img/avatar2.png" @click="handleClick(2)">
                    <p>狐狸</p>
                </span>
                <span class="monky">
                    <img src="../../assets/img/avatar3.png" @click="handleClick(3)">
                    <p>猴子</p>
                </span>
            </li>
            <li>
                <span class="lujiao">
                    <img src="../../assets/img/avatar4.png" @click="handleClick(4)">
                    <p>鹿角</p>
                </span>
                <span class="hua">
                    <img src="../../assets/img/avatar5.png" @click="handleClick(5)">
                    <p>花</p>
                </span>
                <span class="shuaige">
                    <img src="../../assets/img/avatar6.png" @click="handleClick(6)">
                    <p>帅哥</p>
                </span>
            </li>
            <li>
                <span class="maomaochong">
                    <img src="../../assets/img/avatar7.png" @click="handleClick(7)">
                    <p>毛毛虫</p>
                </span>
                <span class="xiaoji">
                    <img src="../../assets/img/avatar8.png" @click="handleClick(8)">
                    <p>小鸡</p>
                </span>
                <span class="xiaoji">
                    <img src="../../assets/img/avatar9.png" @click="handleClick(9)">
                    <p>小草</p>
                </span>
            </li>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "tietu",
        data() {
            return {
                index: {
                    type: Number,
                    default: null
                },
                imgData: [
                        null,
                        require('../../assets/img/avatar1.png'),
                        require('../../assets/img/avatar2.png'),
                        require('../../assets/img/avatar3.png'),
                        require('../../assets/img/avatar4.png'),
                        require('../../assets/img/avatar5.png'),
                        require('../../assets/img/avatar6.png'),
                        require('../../assets/img/avatar7.png'),
                        require('../../assets/img/avatar8.png'),
                        require('../../assets/img/avatar9.png')
                ]


            }
        },
        created() {
        },
        methods: {
            handleClick(index) {
                console.log('click',index)
                this.index = index
                console.log(this.$refs.beijing)
                document.getElementById('beijing').style.backgroundImage = this.imgData[0].url
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/iconfont/iconfont.css";
    .tietu-container{
        width: 100%;
        height: 180px;
        background: url("../../assets/img/logo.png") no-repeat center center;
        background-size: cover;
        position: relative;
        box-sizing: border-box;
        z-index: 1;
    }
    .tietu-container:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(15px);
        z-index: 2;

    }
    .myavatar-wrapper{
        position: absolute;
        left: 50%;
        top: 0;
        display: flex;
        transform: translateX(-50%);
        z-index: 11;
        flex-direction: column;
    }
    .myavatar-wrapper .top{
        position: relative;
        width: 60px;
        height: 90px;
    }
    .myavatar-wrapper .top .gaizi{
        background-size: 100% 100%;
        width: 60px;
        height: 60px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .myavatar-wrapper .avatar{
        position: absolute;
        top: 43px;
        left: 0;
    }
    .myavatar-wrapper p{
        line-height: 18px;
        color: #fff;
        font-weight: 700;
        text-align: center;
    }
    .myavatar-wrapper img{
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
    .shezhi{
        display: flex;
        line-height: 30px;
        background: #f8f8f8;
    }
    .shezhi .left{
        width:60px;
        line-height: 46px;
    }
    .shezhi .produce{
        flex: 1;
        font-weight: 600;
        line-height: 46px;
    }
    .shezhi .left i{
        color: #ffcd32;
    }
    .shezhi .btn{
        width: 70px;
        margin: 8px;
        background-color: #1fbaf3 ;
        color: white;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .avatar-list{
        display: flex;
        height: 300px;
        flex-direction: column;
    }
    .avatar-list li{
        list-style: none;
        display: flex;
        flex: 1;
        height: 100px;
        magin-bottom: 13px;
    }
    .avatar-list li span{
        flex: 1;
        margin-right: 5px;
        border-right: 5px solid white;
    }
    .avatar-list li span:nth-child(3){
        margin-right: -5px;
        border-right: none;
    }
    .avatar-list li span p{
        background-color: white;
        line-height: 30px;
    }
    .tietu{
        background-color: #fafafa;
    }
</style>