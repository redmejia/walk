import { CANCEL_ORDER, NEW_ITEM, DELETE_ITEM, INCREMENT_QTY, DECREMENT_QTY } from "../../Constants";
const initState = {
    count: 0,
    items: []
}

export const newItemReducer = (state = initState, action) => {
    switch (action.type) {
        case NEW_ITEM:
            return { items: [...state.items, { ...action.item }], count: state.count + 1 };
        case CANCEL_ORDER:
            return { count: 0, items: [] }
        case DELETE_ITEM:
            // action.item = item.id
            return { items: state.items.filter(items => items.id !== action.item), count: state.count - 1 }
        case INCREMENT_QTY:
            // action.item = item.id
            return {
                items: state.items.filter((item) => {
                    return item.id === action.item ? item.qty++ : item.qty
                }),
                count: state.count
            }
        case DECREMENT_QTY:
            // action.item = item.id
            return {
                items: state.items.filter((item) => {
                    return item.id === action.item ? item.qty-- : item.qty
                }),
                count: state.count
            }

        default:
            return state;
    }
}