<template>
    <div class="personal" :style= "{height: height + 'px'}">
        <div class="header">
            <div class="content">
                <img src="../../assets/img/heade.png">
            </div>
            <div class="des">
                <div class="name">米方</div>
                <div class="focus">关注7</div>
            </div>
        </div>
        <div class="line"></div>
        <div class="list">
            <router-link :to = "{ path: '/questions', query: { id: 1}}"  tag="div" class="tiwen">
                <span class="wra">
                     <i class="iconfont icon-question left"></i>
                    <span style="margin-left: 5px">向主播提问</span>
                </span>
                <i class="iconfont icon-right right"></i>
            </router-link>
            <div class="line"></div>
            <router-link :to = "{ path: '/billbord', query: { id: 1}}" tag="div" class="bangdan">
                 <span class="wra">
                    <i class=" iconfont icon-bangdan left"></i>
                    <span style="margin-left: 5px">提问榜单</span>
                </span>
                <i class="iconfont icon-right right"></i>
            </router-link>
            <div class="line"></div>
            <router-link :to = "{ path: '/messages', query: { id: 1}}" tag="div" class="sixn">
                <span class="wra">
                    <i class=" iconfont icon-message left"></i>
                    <span style="margin-left: 5px">私信主播</span>
                </span>
                <i class="iconfont icon-right right"></i>
            </router-link>
            <div class="line"></div>
            <router-link :to = "{ path: '/zanshang', query: { id: 1}}" tag="div" class="zanshang">
                 <span class="wra">
                    <i class=" iconfont icon-befans left"></i>
                    <span style="margin-left: 5px">赞赏主播</span>
                </span>
                <i class="iconfont icon-right right"></i>
            </router-link>
            <div class="line"></div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "personal",
        props: {
            height: {
                type: Number,
                default: 667
            }
        },
        created() {
            console.log(this.height)
        }
    }
</script>

<style scoped>
    @import "../../assets/iconfont/iconfont.css";
    .personal{
        background-color: #bf9f3a;
    }
    .header {
        display: flex;
        height: 130px;
    }
    .content{
        width: 120px;
        line-height: 165px;
    }
    .content img{
        width:60px;
        height: 60px;
        border-radius: 30px;
        border: 2px solid #ffffff;
    }
    .list{
        background-color: white;
    }
    .left{
        margin-left: 20px;
    }
    .list .sixn .wra,
    .list .tiwen .wra,
    .list .zanshang .wra,
    .list .bangdan .wra{
        float: left;
        margin-left: 5px;
    }
    .list .sixn .right,
    .list .bangdan .right,
    .list .tiwen .right,
    .list .zanshang .right{
        float: right;
        margin-right:5px;
        color: #ffcd32;
    }
    .list .sixn, .list .tiwen, .list .zanshang, .list .bangdan{
        height: 50px;
        line-height: 50px;
    }
    .list a{
        text-decoration: none;
    }
    .header .des{
        color: #ffffff;
        text-align: left;
    }
    .header .des .name{
        font-weight: 600;
        line-height: 60px;
        margin-top: 13px;
    }
    .header .des  .focus{
        font-size: 12px;
    }
    .line{
        background-color: #f4f2ee;
        height: 10px;
        width: 100%;

    }


</style>