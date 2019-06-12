<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/focus">
            <span class="tab-link">关注</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/dialogs">
            <span class="tab-link">消息</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/personal">
            <span class="tab-link">我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped>
    .tab{
        display: flex;
        margin-bottom: 20px;
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