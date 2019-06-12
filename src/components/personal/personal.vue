<template>
    <div class="personal">
        <div class="header">
            <img src="./header.png" style="width:100%;height: 100%">
            <div class="avatar-wrapper">
                <img src="../../assets/img/logo.png" class="avatar">
                <div class="name">米方</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personal"
    }
</script>

<style scoped>
.personal{
    height: 700px;
    color: white;
}
.header{
    position: relative;
}
.avatar-wrapper{

}
.header .avatar{
    width:70px;
    height: 70px;
    border-radius: 35px;
    position: absolute;
    text-align: center;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-50px;
    border:2px solid white;
}
.header .avatar-wrapper .name{
    position: absolute;
    top:70%;
    left:50%;
    margin-left: -35px;
}
</style>