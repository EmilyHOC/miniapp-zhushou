<template>
    <div class="questions" :style= "{height: height + 'px'}">
        <div class="sigma-middle-line">
            <span class="sigma-line-text">向主播提问</span>
        </div>
        <div class="container">
            <textarea class="qBox" placeholder="请描述你的问题,尽量简洁">
            </textarea>
            <div class="box"></div>
            <div class="btn-wrapper">
                <div class="submit">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "questions",
        props: {
            height: {
                type: Number,
                default: 667
            }
        }
    }
</script>

<style scoped>
.questions{
    background-color: white;
    box-sizing: border-box;
    padding: 10px 0 0 0;
    margin: 20px;
    text-align: center;

}
.container{
    position: relative;
}
.container .box{
    width: 50px;
    height: 50px;
    background-color: white;
    border: 1px dashed #d4d4d4;
    outline: 10px solid #d4d4d4;
    outline-offset: -35px;
    cursor: pointer;
    position: absolute;
    bottom: 56px;
    left: 56px;
}

.sigma-middle-line:before{
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: #999;/*颜色需与主题大背景色一致*/
    position: relative;
    top: 10px;/*调节线高*/
    left: 0;
}
.sigma-line-text{
    display: inline-block;
    background: #fff;
    padding: 0 18px 0 18px;
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #14799e;
}
.qBox{
    background-color: #f7f7f7;
    width: 270px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid #dbdbdb;
    font-size: 16px;

}
.questions .btn-wrapper{
    float: right;
}
.container{
    padding: 30px;
}
.submit{
    background-color: #14799e;
    width:60px;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    color: white;

}
</style>