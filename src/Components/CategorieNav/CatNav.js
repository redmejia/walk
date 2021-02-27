import { connect } from 'react-redux';
import './CatNav.css';
import { loadCategorie } from "../../Redux/Actions/CategorieAction";
import { useEffect, useState } from 'react';
// import { bindActionCreators } from "redux";
import { HEELS, MENS_BOOTS, MENS_SPORT, WOMENS_BOOTS } from '../../Api/Utils/Constants';
const CatNav = ({ loadCategorie }) => {
    const [select, setSelecte] = useState(false)
    // const mensBoots = () => {
    //     // alert("mierda")
    //      loadCategorie(MENS_BOOTS)
    // }
    useEffect(() => {
        loadCategorie(MENS_BOOTS)
    }, [loadCategorie])
    // BAD TRY NEW WAY.
    return (
        <>
            <div className="cat-nav">
                <div className="cats">
                    <h1>mens</h1>
                    <li className="select-cat" >boots</li>
                    <li className="select-cat">sport</li>
                    <h1>womens</h1>
                    <li className="select-cat">boots</li>
                    <li className="select-cat">heels</li>
                </div>
            </div>
        </>
    );
}
const mapDispatchToProps = {
        loadCategorie
}
export default connect(null, mapDispatchToProps)(CatNav);