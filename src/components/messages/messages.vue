<template>
    <div class="questions" :style="{height: height + 'px'} ">
        <div class="fix-wrapper">
            <img src="../../assets/img/logo.png" class="fix-avatar">
            <span class="content">你想跟我聊什么</span>
        </div>
        <!-- 页面内容区域 -->
        <div class="contentBox">
            <div class="contentBox-wrapper">
                <div v-for="(item,index) in content" :key="index" class="box">
                    <span class="content-con">{{item}}</span>
                    <img src="../../assets/img/heade.png">
                </div>
            </div>
        </div>
        <div class="wrapper" ref="content">
            <div class="pull-question">
                <input class="input-text" placeholder="想问我什么呀？"  v-model="textContent" id="dbl">
                <i class="iconfont icon-emotion" @click="faceContent"></i>
                <div class="send" @click="handleClick">发送</div>
                <div class="emotion-window" v-show="showEmotion">
                    <ul>
                        <li v-for="(item, index) in faceList" :key="index" @click="getEmoij(index)">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const appData = require('../../assets/emojis')
    export default {
        name: "messages",
        props: {
            width:{
                type: Number,
                default: 375
            },
            height: {
                type: Number,
                default: 667
            }
        },
        data() {
          return {
              showEmotion: false,
              faceList: [],
              getEmoijString: '',
              textContent: '',
              content: []
          }
        },
        created() {

        },
        mounted() {
        },
        methods: {
            handleClick() {
                 if(this.textContent == '')
                     return alert("请输入内容")
                 //存入
                this.content.push(this.textContent)
                //清空input
                this.textContent = ''
                //关闭表情列表
                this.showEmotion = false
                this.$refs.content.style.bottom = 5 +'px'
            },
            faceContent() {
                this.showEmotion = !this.showEmotion
                this.$refs.content.style.bottom = 200 +'px'
                if(this.showEmotion == true){
                    for(let i in appData) {
                        this.faceList.push(appData[i].char)
                    }
                }else {
                    this.faceList = []
                    this.$refs.content.style.bottom = 5 +'px'
                }
            },
            getEmoij(index) {
                //获取用户点击之后的标签，存到输入框里
                for(let i in this.faceList) {
                    if(index == i){
                        this.getEmoijString = this.faceList[index];
                        this.textContent += this.getEmoijString
                    }
                }
            }

        }
    }
</script>

<style scoped>
    @import "../../assets/iconfont/iconfont.css";
    .questions{
        background-color: #ededed;
        border-bottom: none;
    }
    .fix-avatar{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        border:1px solid white;
    }
    .fix-wrapper{
        position: relative;
        text-align: left;
        padding: 10px;
    }
    .fix-avatar::before{
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        display: block;
        border-style: solid;
        border-width: 10px;
        border-color: transparent #ffcd32 transparent transparent ;
        z-index: 20;
        bottom: 10px;
        left: 10px;
    }
    .content{
        font-weight: 500;
        display: inline-block;
        position: relative;
        padding: 10px;
        margin-left: 10px;
        line-height: 1.2;
        text-align: left;
        color: #353535;
        border-radius: 10px;
        vertical-align: top;
        font-family: "Microsoft YaHei UI";
        font-size: 18px;
        background-color: white;
    }
    .content:after{
        /*容器后面添加一个空元素，长度和宽度设为0*/
        content: "\00a0";
        width: 0;
        height: 0;
        /*指定这个空元素为块级元素*/
        display: block;
        border-style: solid;
        border-width: 8px;
        border-color: transparent white transparent transparent;
        /*指定空元素的定位方式为absolute*/
        position: absolute;
        bottom:50%;
        transform: translateY(50%);
        left: -15px;
        z-index: 20
    }
    .wrapper{
        width:100%;
        position: fixed;
        bottom: 5px;
        padding-top: 5px;
        background-color: #f6f6f6;
        border-top: 1px solid #d9d9d9;
    }
    .pull-question{
        text-align: center;
        display: flex;
        height: 40px;
        margin: 0 10px 0px 10px
    }
    .pull-question i{
        font-size: 26px;
    }
    .pull-question .input-text{
        flex: 1;
        border:1px solid #ffcd32;
        height: 30px;
        border-radius: 5px;
        padding: 0px 10px;
        font-size: 20px;
        outline: none;
    }
    .pull-question i{
        width:40px;
        color: #ffcd32;
    }
    .pull-question .send{
        height: 30px;
        background-color: #ffcd32;
        border-radius: 5px;
        line-height: 30px;
        width: 42px;
        color: white;
    }
    .contentBox .contentBox-wrapper{
        padding-left: 60px;
        position: relative;
        text-align: left;
        display: block;
    }
    .contentBox .contentBox-wrapper .box{
        line-height: 30px;
        border-radius: 5px;
        margin-right: 25px;
        margin-bottom: 15px;
        word-break: normal;
        word-wrap: break-word;
        text-align: right;
        display: block;

    }
    .contentBox .contentBox-wrapper .box img{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        vertical-align: middle;

    }
    .contentBox .contentBox-wrapper .box  .content-con{
        background-color: #a8ea7b;
        color: #082c00;
        padding: 10px;
        border-radius: 10px;
        position: relative;
        margin-right: 8px;
    }
    .contentBox .contentBox-wrapper .box  .content-con:after{
        content: "\00a0";
        width: 0;
        height: 0;
        /*指定这个空元素为块级元素*/
        display: block;
        border-style: solid;
        border-width: 8px;
        border-color:    transparent  transparent transparent #a8ea7b;
        /*指定空元素的定位方式为absolute*/
        position: absolute;
        bottom:50%;
        transform: translateY(50%);
        z-index: 20;
        right: -14px;
        top: 50%;
        margin-top: -15px;
    }
    .emotion-window{
        position: fixed;
        display: inline-block;
        bottom: 0;
        width: 90%;
        height: 185px;
        background-color: rgba(95, 83, 83, .5);
        /*border: 1px solid #eee;*/
        margin-bottom: 5px;
    }
    .emotion-window ul{
        padding-left: 0;
    }
    .emotion-window li{
        list-style: none;
        display: inline;
        width: 10%;
        float: left;
    }
    .emotion-window:after{
        content: "\00a0";
        width: 0;
        height: 0;
        /*指定这个空元素为块级元素*/
        display: block;
        border-style: solid;
        border-width: 8px;
        border-color:  transparent  transparent  rgba(95, 83, 83, .5) transparent;
        /*指定空元素的定位方式为absolute*/
        position: absolute;
        bottom:50%;
        transform: translateY(50%);
        z-index: 20;
        right: 30px;
        top: -24px;
    }

</style>