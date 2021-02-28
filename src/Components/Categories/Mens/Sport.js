import { connect } from "react-redux";
import ProductCard from "../../Cards/ProductCard"
import { loadCategorie } from "../../../Redux/Actions/CategorieAction";
import { useEffect } from "react";
import { MENS_SPORT } from "../../../Api/Utils/Constants";

const Sport = ({loadCategorie, categorie}) => {
    useEffect(()=>{loadCategorie(MENS_SPORT)}, [loadCategorie])
    return(
        <>
            <ProductCard data={categorie} />        
        </>
    );
}
const mapStateToProps = (state) => {
    return{
        categorie : state.categorie
    }
}
const mapDispatchToProps = {
    loadCategorie
}

export default connect(mapStateToProps, mapDispatchToProps)(Sport)