import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'

Vue.filter('uppercase', (val) => val.toUpperCase());

Vue.component('appList', List);

Vue.mixin({
  beforeCreate() {
    console.log('before create');
  } 
});

new Vue({ 
  el: '#app',
  render: h => h(App) 
})
