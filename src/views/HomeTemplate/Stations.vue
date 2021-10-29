<template lang="">
  <div>
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else class="container mt-5">
      <h2 class="text-center mb-5">Chuyến bay được ưa thích</h2>
      <div class="alert alert-danger" v-if="err">ERR_EMTY_RESPONSE</div>
      <div class="row">
        <div class="col-md-3" v-for="(item, i) in stations" :key="i">
          <StationItem :name="item.name" :address="item.address" :province="item.province" :id="i"/>
        </div>
        </div> 
    </div>
  </div>
</template>
<script>
  import StationItem from "./StationItem.vue"
  import Loading from "../../components/Loading.vue"
export default {
  components:{
    StationItem,
    Loading
  },
  computed:{
    loading(){
      return this.$store.state.station.loading;
    },
    stations(){
      console.log(this.$store.state.station.stations)
      return this.$store.state.station.stations;

    },
    err(){
      return this.$store.state.station.err;
    }
  },
  created(){
    this.$store.dispatch("fetchStations");
  }
};
</script>
<style lang="">
  
</style>