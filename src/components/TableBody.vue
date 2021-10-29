<template v-if="station">
  <tbody>
    <tr v-for="(item, i) in station" :key="item.id">
      <th scope="row">{{i+1}}</th>
      <td>{{ item.name }}</td>
      <td>{{item.address}}</td>
      <td>{{item.province}}</td>
      <td>
        <router-link class="btn btn-success me-2" :to="{ name: 'editStation', params: { id: item.id, name: item.name, address:item.address, province:item.province }}">
          Edit</router-link
        >
        <button
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="id=item.id"
        >
          Delete
        </button>
      </td>
    </tr>
    <DeleteConfirm :id="id"/>
  </tbody>
</template>
<script>
import DeleteConfirm from "./DeleteConfirm.vue";
export default {
  data() {
    return {
      id:0
    }
  },
  props: ["station"],
  components:{
    DeleteConfirm
  }
};
</script>
<style lang=""></style>
