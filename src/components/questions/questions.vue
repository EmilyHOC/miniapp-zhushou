<template>
    <div class="questions" :style="{height: height} + 'px'">
        <div class="fix-wrapper">
            <img src="../../assets/img/logo.png" class="fix-avatar">
            <span class="content">你有什么要悄悄告诉我的吗</span>
        </div>
        <!-- 页面内容区域 -->
        <div class="contentBox">
            <ul>
                <li v-for="(item,index) in content" :key="index">
                    <span>{{item}}</span>
                </li>
            </ul>
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
        name: "question",
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
        height: 667px;
        background-color: #2c3e50;
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
        color: #000;
        background: #ffcd32;
        border-radius: 10px;
        vertical-align: top;
        font-family: "Microsoft YaHei UI";
        font-size: 18px;
        color: white;
        background:-webkit-gradient(linear, left top, left bottom, from(#ffcd32), to(#f3961c));
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
        border-color: transparent #ffcd32 transparent transparent;
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
    }
    .pull-question{
        text-align: center;
        display: flex;
        height: 40px;
        margin: 0 10px 0px 10px
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
    .contentBox ul{
        padding-left: 60px;
        position: relative;
    }
    .contentBox li{
        list-style: square;
        background-color: #ffcd32;
        line-height: 30px;
        border-radius: 5px;
        color: white;
        margin-right: 60px;
        margin-bottom: 5px;
        background:-webkit-gradient(linear, left top, left bottom, from(#ffcd32), to(#f3961c));
        word-break: normal;
        word-wrap: break-word;
        text-align: left;
        padding: 3px;

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