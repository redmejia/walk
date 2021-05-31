import { CANCE_ORDER, NEW_ITEM } from "../../Constants"

const newItemAction = (item) =>{
    return {
        type: NEW_ITEM,
        item
    }
}

export const addItem = (item) => {
    return (dispatch) => {
        dispatch(newItemAction(item))
        // not sent request
    }
}

const cancelOrderAction = () => {
    return {
        type : CANCE_ORDER 
    }
}

export const cancelOrder = () => {
    return (dispatch) =>{
        dispatch(cancelOrderAction())
    }
}