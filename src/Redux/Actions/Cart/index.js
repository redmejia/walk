import { BASEURL } from "../../../Api/Utils/url"
import { CANCEL_ORDER, DECREMENT_QTY, DELETE_ITEM, INCREMENT_QTY, PURCHASE, NEW_ITEM, PURCHASE_STATUS } from "../../Constants"
// adding new item to my cart
const newItemAction = (item) => {
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
// cancel the order
const cancelOrderAction = () => {
    return {
        type: CANCEL_ORDER
    }
}

export const cancelOrder = () => {
    return (dispatch) => {
        dispatch(cancelOrderAction())
    }
}
// delete an item  delete by item id
const deleteItemAction = (item) => {
    return {
        type: DELETE_ITEM,
        item
    }
}

export const deleteItem = (item) => {
    return (dispatch) => {
        dispatch(deleteItemAction(item))
    }
}
// increment qty
const IncrementItemQtyAction = (item) => {
    return {
        type: INCREMENT_QTY,
        item
    }
}

export const incrementQty = (item) => {
    return (dispatch) => {
        dispatch(IncrementItemQtyAction(item))
    }
}

//Decrement qty
const DecrementItemQtyAction = (item) => {
    return {
        type: DECREMENT_QTY,
        item
    }
}

export const decrementQty = (item) => {
    return (dispatch) => {
        dispatch(DecrementItemQtyAction(item))
    }
}

//MAKE AN ORDER
const MakeOrderAction = (order) => {
    return {
        type: PURCHASE,
        order
    }
}

// CHECK PURCHASE not need
const CheckPurchaseAction = (orderStatus) => {
    return {
        type: PURCHASE_STATUS,
        orderStatus
    }
}

export const makeOrder = (order) => {
    return (dispatch) => {
        dispatch(MakeOrderAction(order))
        return fetch(BASEURL + "orders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(res => {
                if (res.transaction_code === 2) {
                    dispatch(CheckPurchaseAction(res)) // not need
                }
            })
    }
}