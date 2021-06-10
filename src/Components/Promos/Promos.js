import { useEffect } from "react";
import { connect } from "react-redux";
import { loadPromotion } from "../../Redux/Actions/PromosAction";
import ProductCard from "../Cards/ProductCard";

const Promos = ({loadPromotion, promo}) => {
	useEffect(()=>{
		loadPromotion()
	},[loadPromotion])
	return (
		<ProductCard data={promo} />
	);
}

const mapStateToProps = (state) => {
	return {
		promo: state.promos
	}
}
const mapDispatchToProps = {
	loadPromotion
}
export default connect(mapStateToProps, mapDispatchToProps)(Promos);