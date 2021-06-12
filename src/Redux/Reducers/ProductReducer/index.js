import { LOAD_PRODUCT_BY_ID } from "../../Constants";

const initState = {
    product: {
        product_id: 0,
        pro_name: "",
        color: "",
        price: 0,
        sizes : [],
        colors : [],
        image : []
    }
}

export const productReducer = (state = initState.product, action) => {
    switch (action.type) {
        case LOAD_PRODUCT_BY_ID:
            return action.product;        
        default:
            return state
    }
}