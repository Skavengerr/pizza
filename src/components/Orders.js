import React from 'react';
import {useSelector} from 'react-redux';

const Orders = () => {
	const {orders} = useSelector(state => state.cart);
	if (!orders.length) return null;
	return (
		<div className="text-20">
			Orders:
			{orders.map((el, i) => (
				<p key={i}>{`Order ${i + 1}: ${el.join(', ')}`}</p>
			))}
		</div>
	);
};

export default Orders;
