<template>
    <div class="devote">
        <router-link :to = "{ path: '/zquestions', query: { id: 1}}"  tag="div" class="tiwen">
                <span class="wra">
                     <i class="iconfont icon-question left"></i>
                    <span style="margin-left: 5px">查看周贡献榜</span>
                </span>
            <i class="iconfont icon-right right"></i>
        </router-link>
        <div class="line"></div>
        <router-link :to = "{ path: '/zquestions', query: { id: 1}}"  tag="div" class="tiwen">
                <span class="wra">
                     <i class="iconfont icon-question left"></i>
                    <span style="margin-left: 5px">查看粉丝榜</span>
                </span>
            <i class="iconfont icon-right right"></i>
        </router-link>
        <div class="line"></div>
        <router-link :to = "{ path: '/zquestions', query: { id: 1}}"  tag="div" class="tiwen">
                <span class="wra">
                     <i class="iconfont icon-question left"></i>
                    <span style="margin-left: 5px">查看贵宾</span>
                </span>
            <i class="iconfont icon-right right"></i>
        </router-link>
        <div class="line"></div>
        <router-link :to = "{ path: '/zquestions', query: { id: 1}}"  tag="div" class="tiwen">
                <span class="wra">
                     <i class="iconfont icon-question left"></i>
                    <span style="margin-left: 5px">查看我的直播间信息</span>
                </span>
        <i class="iconfont icon-right right"></i>
    </router-link>
        <div class="line"></div>

    </div>
</template>

<script>
    export default {
        name: "zdevete"
    }
</script>

<style scoped>
    .wra{
        float: left;
    }
    .right{
        float: right;
    }
    .line{
        background-color: #f4f2ee;
        height: 5px;
        width: 100%;
    }
</style>