export const initialState = {
    cart: [],
    user: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return { ...state, cart: [...state.cart, action.item] };
        case 'REMOVE_FROM_BASKET':
            return { state };
        default:
            return state;
    }
}

export default reducer;