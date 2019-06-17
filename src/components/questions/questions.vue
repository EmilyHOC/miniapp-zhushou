<template>
    <div class="questions" :style="{height: height} + 'px'">
        <div class="fix-wrapper">
            <img src="../../assets/img/logo.png" class="fix-avatar">
            <span class="content">你有什么要悄悄告诉我的吗</span>
        </div>
        <div id="myquestion" class="content-right">

        </div>
        <div class="wrapper">
            <div class="pull-question">
                <input class="input-text" placeholder="想问我什么呀？" ref="content">
                <i class="iconfont icon-emotion"></i>
                <div class="send" @click="handleClick">发送</div>
            </div>
        </div>
    </div>
</template>

<script>

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
        created() {

        },
        mounted() {

        },
        methods: {
            handleClick() {
                console.log(this.$refs.content.value)
                let node = document.getElementById('myquestion')
                let insertpos = document.createElement('p')
                insertpos.innerHTML = this.$refs.content.value
                this.$refs.content.value = ''
                node.appendChild(insertpos)
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
    　　background:linear-gradient(top, #f9d835, #f3961c);
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
        bottom: 0;
    }
    .pull-question{
        text-align: center;
        display: flex;
        height: 40px;
        margin: 0 10px 5px 10px
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
    /*发送内容的css样式*/

</style>