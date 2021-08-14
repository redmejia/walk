import { BASEURL } from "../../../Api/Utils/url"
import { CANCEL_ORDER, DECREMENT_QTY, DELETE_ITEM, INCREMENT_QTY, PURCHASE, NEW_ITEM, RETRIVE_PURCHASE, DELETE_ITEM_REFOUND } from "../../Constants"
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
const MakeOrderAction = (orders) => {
    return {
        type: PURCHASE,
        orders
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
        })
    }
}

// RETRIVE PURCHASE
const RetrivekPurchaseAction = (orders) => {
    return {
        type: RETRIVE_PURCHASE,
        orders
    }
}

export const retrivePurchase = (id) => {
    return (dispatch) => {
        fetch(BASEURL + "orders?user-id=" + id)
            .then(res => res.json())
            .then(data => dispatch(RetrivekPurchaseAction(data)))
    }

}
// Deleting and refound. 
const DeleteItemRefoundAction = (orderID) => {
    return {
        type: DELETE_ITEM_REFOUND,
        orderID
    }
}

export const cancelPurchaseItem = (orderID) => {
    return (dispatch) => {
        dispatch(DeleteItemRefoundAction(orderID))
        // return fetch(BASEURL + "orders?del-refound=" + orderID, {
        //     method: "DELETE"
        // })

    }
}
