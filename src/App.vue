<template>
  <div class="container text-center pt-5">
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
    }
  };
</script>

<style scoped>
</style>
