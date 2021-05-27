import { useParams } from "react-router";

const Product = ({pro_id}) => {
    let id= useParams()
    return(
        <div>
            <h2>hello world</h2>
            <h1>{pro_id}</h1>
        </div>
    );
}

export default Product;