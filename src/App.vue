<template>
  <div>
      <h2>Form inputs</h2>

      <select v-model="social">
        <option 
          v-for="social of socialsList"
        >{{ social }}</option>
      </select>

      <hr>

      <p>{{ social }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      defaultSocial: 'vk',
      social: 'facebook',
      socialsList: ['instagram', 'vk', 'facebook']
    };
  }
};
</script>

<style scoped>
</style>
