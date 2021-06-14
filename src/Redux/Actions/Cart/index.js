import { CANCEL_ORDER, DELETE_ITEM, NEW_ITEM } from "../../Constants"

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
        type : CANCEL_ORDER 
    }
}

export const cancelOrder = () => {
    return (dispatch) =>{
        dispatch(cancelOrderAction())
    }
}

const deleteItemAction = (item) => {
    return{
        type: DELETE_ITEM,
        item
    }
}

export const deleteItem =(item) =>{
    return(dispatch)=>{
        dispatch(deleteItemAction(item))
    }
}