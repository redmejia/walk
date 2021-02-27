import './Cards.css'
import logo from '../../assets/zapato.jpg'
const ProductCard = ({ data }) => {
    return (
        <>
            <div className="product-container" onClick={() => { alert("mierda") }}>
                {data.map(d => {
                    return (
                        <div className="card-container">
                            <img src={logo} alt="Avatar" style={{ width: '100%' }}></img>
                            <div className="card-body">
                                <div key={d.pro_id}>
                                    <p>{d.name}</p>
                                    <p>{d.color}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    )
}
export default ProductCard;