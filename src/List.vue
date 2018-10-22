<template>
<div>
    <h2>List</h2>

    <input type="text" v-model="searchName">

    <ul>
        <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
    return {
      searchName: '',
      names: ['Ray', 'Yu', 'Nob', 'WFY']
    };
  },

  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      });
    }
  }
};
</script>

<style>
</style>
