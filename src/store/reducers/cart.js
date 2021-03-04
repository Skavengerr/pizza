const initialState = {
	order: [],
	orders: [],
	orderStat: []
};

export const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				order: [...state.order, action.payload]
			};
		case 'CONFIRM_ORDER':
			return {
				...state,
				orderStat: state.orderStat.concat(...state.order),
				orders: state.orders.concat([state.order]),
				order: []
			};

		default:
			return state;
	}
};
