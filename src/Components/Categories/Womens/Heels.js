import { useEffect } from "react";
import { connect } from "react-redux";
import { HEELS } from "../../../Api/Utils/Constants";
import { loadCategorie } from "../../../Redux/Actions/CategorieAction";
import ProductCard from "../../Cards/ProductCard";
import CatNav from "../../CategorieNav/CatNav";

const Heels = ({ loadCategorie, categorie }) => {
    useEffect(() => { loadCategorie(HEELS) }, [loadCategorie])
    return (
        <>
            <CatNav />
            <ProductCard data={categorie} />
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        categorie: state.categorie
    }
}

const mapDispatchToProps = {
    loadCategorie
}

export default connect(mapStateToProps, mapDispatchToProps)(Heels)