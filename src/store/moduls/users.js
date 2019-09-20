import axios from 'axios';

export default {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
		.then(result => commit('updateCurrentUser', result.data))
		// eslint-disable-next-line
        .catch(console.error);
	},
	addRobotToCart () {
		// eslint-disable-next-line
		console.log('Users addRobotToCart called');
	},
  },
};