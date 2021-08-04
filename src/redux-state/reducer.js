import { ADD_TO_CART_ACTION, REMOVE_FROM_CART_ACTION} from "./actions";

export const reducer = (state, action) => {
    if (action.type === ADD_TO_CART_ACTION) {
        const newItem = action.payload.newItem;

        
        return {
            ...state,
            shoppingCart: {
                ...state.shoppingCart,
                items: [
                    ...state.shoppingCart.items,
                    newItem,
                ],
            }
        }
    }

    if (action.type === REMOVE_FROM_CART_ACTION) {
        const itemIdToRemove = action.payload.itemId;

        
        return {
            ...state,
            shoppingCart: {
                ...state.shoppingCart,
                items: state.shoppingCart.items.filter(item => item.id !== itemIdToRemove),
            }
        }
    }

    return state;
};