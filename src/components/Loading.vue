<template lang="">
  <div class="loading">
    <img class="loading_img" :src="require('../assets/img/SpinLoading-0.7s-237px.svg')"/>
  </div>
</template>
<script>

export default {
  created(){
    console.log("loading")
  }
}
</script>
<style lang="scss">
  .loading{
    display: flex;
    padding-top: 100px;
    &_img{
      margin: auto;
    }
  }
</style>