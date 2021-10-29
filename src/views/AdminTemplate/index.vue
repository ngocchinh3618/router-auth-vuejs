<template lang="">
  <div>
    <NavbarAdmin/>
    <router-view></router-view>
  </div>
</template>
<script>
import NavbarAdmin from "../../components/NavbarAdmin.vue"
export default {
  components:{
    NavbarAdmin
  }
}
</script>
<style lang="">
  
</style>