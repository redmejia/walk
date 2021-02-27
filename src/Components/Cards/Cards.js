// import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
const Cards = ({categorie}) => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:8080/v1/categorie?cat=mens-boots')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])
    return (
        <>
            <div className="App">
                <ProductCard data={categorie} />
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        categorie : state.categorie 
    }
}
export default connect(mapStateToProps, null)(Cards);