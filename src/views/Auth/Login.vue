<template lang="">
<div class="container">
  <div v-if="loading">
    <Loading/>
  </div>
  <div v-else class="col-sm-6 mx-auto mt-3">
    <div class="alert alert-danger" v-if="err">{{err.message}}</div>
    <form @submit.prevent = "onSubmit">
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="email">
        <div class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input">
        <label class="form-check-label">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</div>
</template>
<script>
  import Loading from "../../components/Loading.vue"
export default {
  components:{
    Loading
  },
  data(){
    return {
      email:"",
      password:""
    };
  },
  computed:{
    loading(){
      return this.$store.getters.loading;
    },
    err(){
      return this.$store.getters.err;
    }
  },
  methods: {
    onSubmit(){
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", formData);
    }
  },
  created() {
    if(this.$store.getters.isAuthenticated){
      this.$router.push("/admin/dasboard")
    }
  },
}
</script>
<style lang="">
  
</style>