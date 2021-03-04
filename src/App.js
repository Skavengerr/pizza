import React from 'react';
import Statistic from './components/Statistic';
import PizzaList from './components/PizzaList';
import Orders from './components/Orders';

export default function App() {
	return (
		<div className=" max-w-lg m-auto ">
			<PizzaList />
			<div className="flex justify-between">
				<Orders />
				<Statistic />
			</div>
		</div>
	);
}
