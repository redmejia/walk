import { LOAD_PROMOTION } from "../../Constants";
const initialState = {
	promo : []
}
export const promotionReducer = (state=initialState.promo, action) => {
	switch (action.type) {
		case LOAD_PROMOTION:		
			return action.promo
		default:
			return state
	}
}