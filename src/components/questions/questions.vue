<template>
    <div class="questions">
        <div class="fix-wrapper">
            <img src="../../assets/img/logo.png" class="fix-avatar">
            <span class="content">请问你有什么要悄悄告诉我的吗</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "question",
        created() {
            var newsID = this.$route.query.id;

        }
    }
</script>

<style scoped>
    .questions{
        height: 667px;
        background-color: #2c3e50;
    }
    .fix-avatar{
        width: 50px;
        height: 50px;
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
        padding: 15px;
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
</style>