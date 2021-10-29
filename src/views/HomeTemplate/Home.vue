<template lang="">
  <div>
    <header>
      <img class="w-100" :src="require('../../assets/img/BayQuocTe-banner.webp')"/>
    </header>
    <body class="container-xxl">
      <h2>CÁC ĐIỂM ĐẾN VIỆT NAM</h2>
      <div class="grid-container">
        <div class="grid-item item1"><img class="w-100" :src="require('../../assets/canhdep/Dalat_amthuc_hong_treo_gio_1920x1080.jpg')"/></div>
        <div class="grid-item item2"><img class="w-100" :src="require('../../assets/canhdep/Dalat_canhdep_thac_pongour_1920x1080.jpg')"/></div>
        <div class="grid-item item3"><img class="w-100" :src="require('../../assets/canhdep/Nhatrang_amthuc_yen_sao_1920x1080.jpg')"/></div>
        <div class="grid-item item4"><img class="w-100" :src="require('../../assets/canhdep/HEROBANNER_NinhBinh-1300x450.webp')"/></div>  
        <div class="grid-item item5"><img class="w-100" :src="require('../../assets/canhdep/Nhatrang_canhdep_thap_ponagar_1920x1080.jpg')"/></div>
        <div class="grid-item item6"><img class="w-100" :src="require('../../assets/canhdep/NinhBinhCanhDepTranhAn1920x1080jpg.webp')"/></div>
        <div class="grid-item item7"><img class="w-100" :src="require('../../assets/canhdep/Phuquoc_canhdep_cau_go_1920x1080.jpg')"/></div>
      </div>
    </body>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .grid-container {
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  
}

.grid-item {
  text-align: center;
  padding: 5px;
  font-size: 30px;
}
.item1 {
  grid-column: 1 / span 2;
  grid-row: 1/span 2;
}

.item4 {
  grid-column: 1 / span 3;
  grid-row: 3;
}
</style>