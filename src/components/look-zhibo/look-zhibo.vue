<template>
    <div class="look-zhibo">
        <div class="close">关闭我呀</div>
    </div>
</template>

<script>
    export default {
        name: "look-zhibo"
    }
</script>

<style scoped>
.look-zhibo{
    height: 700px;
}
.look-zhibo .close{
    display: inline-block;
    text-align: center;
    width:300px;
    line-height: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: #ffcd32;
    color: white;
}
</style>