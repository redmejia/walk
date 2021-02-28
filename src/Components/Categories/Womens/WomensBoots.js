import { useEffect } from "react"
import { connect } from "react-redux"
import { WOMENS_BOOTS } from "../../../Api/Utils/Constants"
import { loadCategorie } from "../../../Redux/Actions/CategorieAction";
import Boots from "../WoMens/WoMens"

const WomensBoots = ({loadCategorie}) =>{
    useEffect(()=>{
        loadCategorie(WOMENS_BOOTS)
    },[loadCategorie])
    return(
        <>
            <Boots />
        </>
    )
}
const mapDispatchToProps = {
    loadCategorie
}
export default connect(null, mapDispatchToProps)(WomensBoots);