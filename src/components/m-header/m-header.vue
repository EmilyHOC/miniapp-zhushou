<template>
    <div class="m-header">
        <div class="icon"></div>
        <h2 class="text">虎牙直播助手</h2>
    </div>
</template>

<script>
    export default {
        name: "m-header"
    }
</script>

<style scoped>
 .m-header{
     height: 44px;
     text-align: center;
     color: #ffcd32;
     font-size: 0;
 }
 .icon{
      display: inline-block;
      margin-top: 10px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      background-image: url("./avatar.png");
      background-size:30px 32px ;
      vertical-align: top;
 }
.text{
    display: inline-block;
    font-size: 18px;
}

</style>