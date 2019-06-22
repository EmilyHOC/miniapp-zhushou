<template>
    <div class="billbord" :style= "{height: height + 'px'}">
        <div class="box">
            <ul>
                <li>你最喜欢的颜色是什么</li>
                <li>你最喜欢的电影是什么</li>
                <li>你有什么兴趣爱好</li>
                <li>你有什么兴趣爱好</li>
                <li>你有什么兴趣爱好</li>
                <li>你有什么兴趣爱好你有什么兴你有什么兴你有什么兴你有什么兴你有什么兴</li>
                <li>你有什么兴趣爱好</li>
                <li>你有什么兴趣爱好</li>
                <li>你有什么兴趣爱好</li>
                <li>你有什么兴趣爱好</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "billbord",
        props: {
            height: {
                type: Number,
                default: 667
            }
        },
    }
</script>

<style scoped>
.billbord:before{
    background: url("../../assets/img/wenti.png") center center no-repeat;
    width: 100%;
    background-size: 100% 100%;

    content: '';
    position: absolute;
    top:0;right:0;bottom:0;left:0;
    filter: blur(8px);
    z-index: 2;
}
 .billbord {
     position: relative;
     overflow: hidden;
     z-index: 1;
 }
 .box{
     width: 300px;
     height: 400px;
     background: rgba(199,207,189,.3);
     z-index: 11;
     position: absolute;
     top: 30px;
     left: 30px;
 }
 .box li{
     color: #2c3e50;
     list-style: square;
     text-align: left;
     padding-right: 14px;
 }
</style>