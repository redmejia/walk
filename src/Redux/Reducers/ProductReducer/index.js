import { LOAD_PRODUCT } from "../../Constants";

const initState = {
    product: [{
        product_id: 0,
        pro_name: "",
        color: "",
        size: "",
        price: 0
    }]
}

export const productReducer = (state = initState.product, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            return action.product;        
        default:
            return state
    }
}