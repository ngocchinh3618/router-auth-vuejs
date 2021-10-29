<template lang="">
    <div class="card" style="width: 18rem; height:8rem">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <router-link :to="getLink" class="btn btn-primary">Detail</router-link>
  </div>
</div>
</template>
<script>
export default {
  props:["name","address","province", "id"],
  computed:{
    getLink(){
      return "/stations/" + this.id
    }
  }
};
</script>
<style lang=""></style>
