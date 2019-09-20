import Axios from 'axios';

export default {
	namespaced: true,
	state: {
		cart: [],
		parts: null,
	},
	mutations: {
		addRobotToCart(state, robot) {
			state.cart.push(robot);
		},
		updateParts(state, parts) {
			state.parts = parts;
		}
	},
	actions: {
		getParts({ commit }) {
			Axios.get('/api/parts')
				.then(result => commit('updateParts', result.data))
				// eslint-disable-next-line
				.catch(console.error);
		},
		addRobotToCart({ commit, state }, robot) {
			const cart = [...state.cart, robot];
			return Axios.post('/api/cart', cart)
				.then(() => commit('addRobotToCart', robot));
		},
	},
	getters: {
		cartSaleItems(state) {
			return state.cart.filter(item => item.head.onSale);
		},
	},
}