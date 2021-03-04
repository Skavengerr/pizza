import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {pizzaData} from '../constants';
import * as Actions from '../store/actions';

const PizzaList = () => {
    const dispatch = useDispatch();
    const handleAddPizza = el => {
        dispatch(Actions.addToCart(el));
    };

    const {order} = useSelector(state => state.cart);
    return (
        <>
            <p className="text-24">Pizza List</p>
            <div className="flex flex-wrap text-center items -center ">
                {Object.keys(pizzaData).map(el => (
                    <div key={el} className="w-1/6">
                        <div
                            className="cursor-pointer m-6 shadow-md h-96"
                            onClick={() => handleAddPizza(el)}
                        >
                            <p className="text-20">{el}</p>
                            <div className="flex  py-6">
                                Ingridients:
                                {Object.keys(pizzaData[el]).join(', ')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-128">
                {!!order.length && (
                    <>
                        <p className="text-20">Your order: {order.join(', ')}</p>
                        <button
                            className="px-10 py-4 shadow-md bg-yellow-400"
                            type="button"
                            onClick={() => dispatch(Actions.confirmOrder())}
                        >
                            Confirm
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default PizzaList;
