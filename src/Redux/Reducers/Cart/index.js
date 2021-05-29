import { NEW_ITEM } from "../../Constants";
const initState = {
    item : []
}

export const newItemReducer = (state = initState.item, action) => {
    switch (action.type) {
        case NEW_ITEM:
           return [...state, {...action.item}];
        default:
            return state;
    }
}
