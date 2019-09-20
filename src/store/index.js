import Vue from 'vue';
import Vuex from 'vuex';
import robotsModul from './moduls/robots';
import usersModul from './moduls/users';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		robots:robotsModul,
		users:usersModul,
	}
});