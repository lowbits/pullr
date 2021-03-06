
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import store from './store/index.js'

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('list-participants-component', require('./components/ListParticipantsComponent.vue'));
Vue.component('add-participant-component', require('./components/AddParticipantComponent.vue'));
Vue.component('tour-component', require('./components/TourComponent.vue'));
Vue.component('tour-settings-component', require('./components/TourSettingsComponent.vue'));


const app = new Vue({
    el: '#app',
    store
});
