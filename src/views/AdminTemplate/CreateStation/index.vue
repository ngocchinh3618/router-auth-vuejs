<template lang="">
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else class="col-sm-6 mx-auto mt-3">
      <h3>Create Station</h3>
      <div class=" alert alert-danger" v-if="err">{{ err.response.message }}</div>
      <form v-else @submit.prevent="onSubmit(formStations)">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" v-model="formStations.name" />
        </div>
        <div class="mb-3">
          <label class="form-label">address</label>
          <input
            type="text"
            class="form-control"
            v-model="formStations.address"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Province</label>
          <input
            type="text"
            class="form-control"
            v-model="formStations.province"
          />
        </div>
        <button type="submit" class="btn btn-success">Update</button>
      </form>
    </div>
  </div>
</template>
<script>
import Loading from "../../../components/Loading.vue";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      formStations: {
        name: "",
        address: "",
        province: "",
      },
    };
  },
  computed: {
    loading() {
      return this.$store.state.station.loading;
    },
    err() {
      return this.$store.state.station.err;
    }
  },
  created() {
    this.$store.dispath("fetchStationDetail", this.$route.params.id);
  },
  methods: {
    onSubmit(value) {
      this.$store.dispatch("fetchCreateStation", value);
    },
  }
};
</script>
<style lang=""></style>
