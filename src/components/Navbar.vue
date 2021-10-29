<template lang="">
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      position: sticky;
      top: 0;
    "
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          style="width: 200px"
          :src="require('../assets/img/VNA_logo_vn.png')"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link exact active-class="active" class="nav-link" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/stations"
              >Stations</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div class="nav-item text-dark">
          <router-link
            active-class="active"
            class="nav-link text-dark"
            to="/admin/stations"
            >Login</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang=""></style>
