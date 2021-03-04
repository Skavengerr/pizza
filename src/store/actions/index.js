export const addToCart = data => {
    return {
        type: 'ADD_TO_CART',
        payload: data
    };
};

export const confirmOrder = () => {
    return {
        type: 'CONFIRM_ORDER'
    };
};
