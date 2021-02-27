import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Cards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/v1/categorie?cat=mens-boots')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <div className="App">
                <ProductCard data={data} />
            </div>
        </>
    )
}
export default Cards;