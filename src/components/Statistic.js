import React, {useCallback, useEffect, useState} from 'react';
import {pizzaData} from '../constants';
import {useSelector} from 'react-redux';

export default function Statistic() {
    const {orderStat, order} = useSelector(state => state.cart);
    useEffect(() => {
        getPizzaInfo(orderStat);
    }, [order]);

    const [ingr, setIngr] = useState([]);
    const [popular, setPopular] = useState();
    const [maxPizzaTimes, setMaxPizzaTimes] = useState();

    const countElOfArray = useCallback(
        arr => {
            return arr.reduce((acc, el) => {
                const itemsCount = (acc[el] || 0) + 1;
                return {...acc, [el]: itemsCount};
            }, {});
        },
        [orderStat]
    );

    const getPizzaInfo = useCallback(
        lastPizzas => {
            const countedItems = countElOfArray(lastPizzas);

            const maxTimes = Math.max.apply(null, Object.values(countedItems));
            const recordItems = Object.entries(countedItems)
                .filter(([, val]) => val === maxTimes)
                .map(([key, val]) => key)
                .join(', ');

            setMaxPizzaTimes(maxTimes);
            setPopular(recordItems);

            const ingrCount = [];
            for (let pizza of lastPizzas) {
                const keys = [...Object.keys(pizzaData[pizza])];
                const values = [...Object.values(pizzaData[pizza])];
                for (let k = 0; k < keys.length; k++) {
                    const element = Object.entries(keys)
                        [k].slice(1)
                        .flatMap(i => Array.from({length: values[k]}).fill(i));
                    ingrCount.push(...element);
                }
            }

            const countedIngr = countElOfArray(ingrCount);
            const sortedIngr = Object.entries(countedIngr).sort((a, b) => b[1] - a[1]);
            setIngr(sortedIngr);

            return {recordItems, sortedIngr};
        },
        [orderStat]
    );

    if (!popular) return null;

    return (
        <div>
            <h2>{`Most popular pizza "${popular}" was ordered ${maxPizzaTimes} times`}</h2>
            <h2>Most popular ingridients:</h2>
            {ingr.length &&
                ingr.map((el, i) => <h4 key={el[0]}>{`${el[0]}: ${el[1]}`}</h4>)}
        </div>
    );
}
