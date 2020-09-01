export const initialState = {
    cart: [
        {
            id: "12321341",
            title: "The Fifth Vital",
            price: 29.00,
            image: "https://m.media-amazon.com/images/I/91rTf5TWhkL._AC_UY327_FMwebp_QL65_.jpg"
        }
    ],
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