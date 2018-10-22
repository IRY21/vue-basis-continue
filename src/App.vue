<template>
  <div>
      <h2>{{ title }}</h2>

      <input type="text" v-model="searchName">

      <ul>
        <li v-for="name of filteredNames">{{ name }}</li>
      </ul>

      <hr>

      <appList></appList>
  </div>
</template>

<script>
import ListMixin from './listMixin'

export default {
  data() {
    return {
      title: "Hello I am Vue!"
    };
  },

  mixins: [ListMixin],

  filters: {
    lowercase(val) {
      return val.toLowerCase();
    }
  }
};
</script>

<style scoped>
</style>
