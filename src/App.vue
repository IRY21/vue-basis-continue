<template>
  <div class="container text-center pt-5">
    <h1>{{ title }}</h1>
    <hr>
    <appCounter></appCounter>
    <appSecondCounter></appSecondCounter>
    <hr>
    <appActions></appActions>
  </div>
</template>

<script>
  import Counter from './Counter';
  import SecondCounter from './SecondCounter';
  import Actions from './Actions';

  export default {
    components: {
      appCounter: Counter,
      appSecondCounter: SecondCounter,
      appActions: Actions
    },

    computed: {
      title() {
        return this.$store.getters.title;
      }
    }
  };
</script>

<style scoped>
</style>
