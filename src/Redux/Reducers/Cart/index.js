import { CANCE_ORDER, NEW_ITEM } from "../../Constants";
const initState = {
    count: 0,
    items: []
}

export const newItemReducer = (state = initState, action) => {
    switch (action.type) {
        case NEW_ITEM:
            return { items: [...state.items, { ...action.item }], count: state.count + 1 };
        case CANCE_ORDER:
            return { count: 0, items: [] }
        default:
            return state;
    }
}
