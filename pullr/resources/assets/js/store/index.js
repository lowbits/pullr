import Vue from 'vue';
import Vuex from 'vuex';
import tour from "./modules/tour";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		tour
	},
	strict: true
});