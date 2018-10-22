<template>
  <div>
      <h2>{{ title }}</h2>

      <input type="text" v-model="searchName">

      <ul>
        <li v-for="name of names">{{ name }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello I am Vue!",
      searchName: '',
      names: ['Ray', 'Yu', 'Nob', 'WFY']
    };
  },

  filters: {
    lowercase(val) {
      return val.toLowerCase();
    }
  }
};
</script>

<style scoped>
</style>
