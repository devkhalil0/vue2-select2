
require('./bootstrap');

import Vue from 'vue'
window.Vue = require('vue').default;

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
});
