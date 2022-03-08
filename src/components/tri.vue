<template>
  <div class="onlineText">
    <div class="imgWrap" @click="clickPic" :class="{'activeClass':searched}">
      <img src="http://47.100.174.78:80/images/cake-1001/img1.png"  alt="" width="200">
    </div>
  </div>
</template>

<script>
export default {
  name: "onlineText",
  data() {
    return {
      searched:true
    };
  },
  methods:{
    clickPic(){
      this.searched=!this.searched;
    }
  }

};
</script>

<style>
.onlineText{
  height: 600px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.onlineText .imgWrap{
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: relative;
}
.onlineText .imgWrap img{
      width: 200px;
      height: 200px;
}
.onlineText .imgWrap.activeClass{
      border: 3px solid red;
      box-sizing: content-box;
      
}
.onlineText .imgWrap::before{
      content:"\e6da";
      font-family:element-icons!important;
      position: absolute;
      left: 1px;
      top: -4px;
      display: inline-block;
      color: #fff;
      font-size: 24px;
      z-index: 100;
}
.onlineText .imgWrap::after{
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 0px;
      height: 0px;
      border-color: blue transparent transparent blue;
      border-width:20px;
      border-style: solid; 
          
}

</style> 