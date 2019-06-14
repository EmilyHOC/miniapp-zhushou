<template>
    <div class="zanshang">
        <img src="./zanshang.png" class="zanashang-avatar" :style="{width: width + 'px'}">
        <div class="money">
            <div class="zanshang-text">支持主播发出更精彩的内容</div>
            <ul class="money-wrapper">
                <li>
                    <div><span class="big">1</span>元</div>
                    <div><span class="big">2</span>元</div>
                    <div><span class="big">5</span>元</div>
                </li>
                <li>
                    <div><span class="big">10</span>元</div>
                    <div><span class="big">20</span>元</div>
                    <div><span class="big">50</span>元</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zanshang",
        data (){
            return {
                width: {
                    type: Number,
                    default: 375
                }
            }
        },
        created() {
            let mywidth = document.body.scrollWidth
            console.log(this.width)
            this.width = mywidth

        }
    }
</script>

<style scoped>
 .zanshang{
     height: 667px;
 }
 .money-wrapper{
     margin: 0;
     padding: 10px;
 }
 .zanashang-avatar{
     width:375px;

 }
 .zanshang-text{
     height: 40px;
     text-align: center;
     color: white;
     font-weight: 700;
     box-sizing: border-box;
     line-height: 40px;
 }
 .money{

 }
 .money-wrapper li{
     list-style: none;
     box-sizing: border-box;


 }
  .money-wrapper li div{
      display: inline-block;
      border: 1px solid #ffcd32;
      width: 30%;
      height: 50px;
      color: #ffcd32;
      line-height: 50px;
      border-radius: 4px;
      font-weight: 600;
      margin: 3px;
  }
 .money-wrapper li div:hover{
     border-color: white;
     color: white;
 }
  .money-wrapper li div:active{
      color: white;
  }
 .money-wrapper li .big{
     font-size: 25px;
     margin-right:2px;
 }



</style>