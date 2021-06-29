import { CANCEL_ORDER, NEW_ITEM, DELETE_ITEM, INCREMENT_QTY, DECREMENT_QTY, PURCHASE, PURCHASE_STATUS, RETRIVE_PURCHASE } from "../../Constants";
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
            return { items: state.items.filter(items => items.product_id !== action.item), count: state.count - 1 }
        case INCREMENT_QTY:
            // action.item = item.id
            return {
                items: state.items.filter((item) => {
                    return item.product_id === action.item ? item.qty++ : item.qty
                }),
                count: state.count,
            }
        case DECREMENT_QTY:
            // action.item = item.id
            return {
                items: state.items.filter((item) => {
                    return item.product_id === action.item ? item.qty-- : item.qty
                }),
                count: state.count,
            }
        default:
            return state;
    }
}

const initPurchaseState = {
    order: {}
}

export const newPurchaseReducer = (state = initPurchaseState, action) => {
    switch (action.type) {
        case PURCHASE:
            // console.log("you are here ", action.order);
            return action.order
        case RETRIVE_PURCHASE:
            return action.order
        default:
            return state
    }
}