<template>
  <div>
      <h2>Form inputs</h2>

      <input type="text" v-model.number="age">

      <hr>

      <p>{{ age }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      age: 25
    };
  },

  watch: {
    age(val) {
      console.log(val);
      console.log(typeof val);
    }
  }
};
</script>

<style scoped>
</style>
