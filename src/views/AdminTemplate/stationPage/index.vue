<template lang="">
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else class="container-fluid">
      <div class="alert" v-if="err">ERR_EMPTY_RESPONSE</div>
      <div v-else class="row">
        <div class="col-sm-10 mx-auto">
          <router-link
            class="btn btn-success m-3 ms-auto"
            to="/admin/create-station"
            >Create Station</router-link
          >

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
              <TableBody :station="stations"  />
          </table>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "../../../components/Loading.vue";
import TableBody from "../../../components/TableBody.vue";

export default {
  components: {
    Loading,
    TableBody
  },
  computed: {
    loading() {
      return this.$store.state.station.loading;
    },
    stations() {
      return this.$store.state.station.stations;
    },
    err() {
      return this.$store.state.station.err;
    },
  },
  created(){
    this.$store.dispatch("fetchStations")
  }
};
</script>
<style lang="scss"></style>
