import Vue from 'vue'
import App from './App.vue'

Vue.filter('uppercase', (val) => {
  return val.toUpperCase();
});

new Vue({ 
  el: '#app',
  render: h => h(App) 
})
