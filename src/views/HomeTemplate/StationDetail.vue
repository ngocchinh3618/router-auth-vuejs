<template lang="">
    <div class="card m-5" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Name: {{getdata.name}}</h5>
        <p class="card-text">
          Address: {{getdata.address}}
        </p>
        <p>Province: {{getdata.province}}</p>
      </div>
    </div>
</template>
<script>
export default {
  computed:{
    getdata(){
      return this.$store.state.station.stations[this.$route.params.id];
    }
  }
};
</script>
<style lang=""></style>
