<template lang="">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          style="width: 200px"
          :src="require('../assets/img/logo_vna_skyteam_white (1).png')"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              exact
              active-class="active"
              class="nav-link"
              to="/admin/dashboard"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              exact
              actice-class="active"
              class="nav-link"
              to="/admin/stations"
              >Stations</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 1.75);
}
</style>
