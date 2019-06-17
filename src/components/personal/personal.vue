<template>
    <div class="personal">
           <ul class="list">
               <li>
                   <span><i class="iconfont icon-question"></i>向主播提问</span>
                   <router-link :to = "{ path: '/questions', query: { id: 1}}">去提问<i class="iconfont icon-right"></i></router-link>
               </li>
               <li>
                   <span><i class="iconfont icon-golevel"></i>提高等级</span>
                   <router-link :to = "{ path: '/lookzhibo',query: { id: 1 }}">去看直播<i class="iconfont icon-right"></i></router-link>
               </li>
               <li>
                   <span><i class="iconfont icon-befans"></i>成为粉丝</span>
                   <router-link :to = "{ path: '/zanshang', query: { id: 1}}">为主播投币<i class="iconfont icon-right"></i></router-link>
               </li>
           </ul>

    </div>
</template>

<script>

    export default {
        name: "personal"
    }
</script>

<style scoped>
    @import "../../assets/iconfont/iconfont.css";
.personal{
    height: 700px;
    color: white;
}
.list{
    padding: 0px 15px 0px 15px;
    margin: 0;
}
.list li{
    list-style: none;
    height: 45px;
    text-align: left;
    border-bottom: 1px solid white;
    margin-bottom: 5px;
    line-height: 45px;
    display: flex;
}
.list li span:nth-child(1){
    flex: 1;
}
.list li a{
    flex: 1;
    text-align: right;
    color: #ffcd32;
    text-decoration: none;
}
.list li i{
    margin-right: 2px;
}


</style>