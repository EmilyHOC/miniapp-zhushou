<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/zdevote">
            <span class="tab-link">查看贡献榜</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/zmessage">
            <span class="tab-link">消息</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/zquestion">
            <span class="tab-link">提问区</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "tab2"
    }
</script>

<style scoped>
    .tab{
        display: flex;
        margin-bottom: 5px;
        color: white;
        margin-top: 15px;
    }
    .tab-item{
        flex: 1;
        padding-bottom: 5px;
        color: white
    }
    .router-link-active{
        padding-bottom: 5px;
        border-bottom: 2px solid #ffcd32;
        color:  #ffcd32
    }



</style>