<template lang="">
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Station</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Are you sure delete?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            ref="cancle"
          >
            No
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteStation(id)"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  methods: {
    deleteStation(id) {
      this.$refs.cancle.click();
      this.$store.dispatch("fetchDeleteStation", id);
    },
  },
};
</script>
<style lang=""></style>
