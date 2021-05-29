import { NEW_ITEM } from "../../Constants";
const initState = {
    items: []
}

export const newItemReducer = (state = initState.items, action) => {
    switch (action.type) {
        case NEW_ITEM:
           return [...state, {...action.item}];
        default:
            return state;
    }
}
