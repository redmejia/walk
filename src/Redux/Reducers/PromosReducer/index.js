import { LOAD_PROMOTION, LOAD_PROMOTION_BY_ID } from "../../Constants";
const initialState = {
	promo: []
}
export const promotionReducer = (state = initialState.promo, action) => {
	switch (action.type) {
		case LOAD_PROMOTION:
			return action.promo
		default:
			return state
	}
}

const initStatePromos = {
	product: {
		product_id: 0,
		pro_name: "",
		color: "",
		price: 0,
		sizes: [],
		colors: [],
		image: []
	}
}

export const promotionByIdReducer = (state = initStatePromos.product, action) => {
	switch (action.type) {
		case LOAD_PROMOTION_BY_ID:
			return action.product
		default:
			return state
	}
}