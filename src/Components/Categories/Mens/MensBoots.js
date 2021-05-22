import { useEffect } from 'react';
import { connect } from 'react-redux';
import { MENS_BOOTS } from '../../../Api/Utils/Constants';
import { loadCategorie } from "../../../Redux/Actions/CategorieAction";
import CatNav from '../../CategorieNav/CatNav';
import Boots from '../WoMens/WoMens'
const MensBoots = ({ loadCategorie }) => {
    useEffect(() => {
        loadCategorie(MENS_BOOTS)
    }, [loadCategorie])
    
    return (
        <>
            {/* <div className="product-navs"> */}
                <CatNav />
            {/* </div> */}
            <Boots />
        </>
    );
}
const mapDispatchToProps = {
    loadCategorie
}
export default connect(null, mapDispatchToProps)(MensBoots);