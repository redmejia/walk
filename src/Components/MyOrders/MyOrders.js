import { useEffect } from "react";
import { connect } from "react-redux";
import { retrivePurchase } from "../../Redux/Actions/Cart";

const orderL = (order) => {
    return (
        order.orders.map((i) => {
            return (
                <div >
                    {
                        <div>
                            <p>
                                <strong>Order ID # {i.product.purchase_id + " "}</strong>
                                {i.client.first_name + " " + i.client.last_name + " " + i.client.email + " "}
                                <strong>Deliver address : </strong> {i.client.address + " " + i.client.state + " " + i.client.zip}
                            </p>
                            <img src={i.product.img} alt="producto" style={{ width: 200, height: 100 }}></img>
                            <h3>{i.product.pro_name}</h3>
                            <ul style={{ listStyle: 'none' }}>
                                <li>color:{i.product.color}</li>
                                <li>size :{i.product.size}</li>
                                <li>qty :{i.product.qty}</li>
                                <li>price :{i.product.price}</li>
                            </ul>
                            {
                                i.product.status_code === 5 ?
                                    <div>
                                        <div >
                                            <div class="card card-body" style={{ backgroundColor: '#f76157' }}>
                                                {/* <strong>Order ID # {i.product.purchase_id}</strong> */}
                                                Could not compleate transaction  <strong>Order ID # {i.product.purchase_id} of Total : {i.product.total}</strong>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div class="col-4" >
                                        <button className="btn btn-danger" onClick={() => alert(i.product.purchase_id)} >Cancel my order</button>
                                    </div>
                            }
                            <hr></hr>
                        </div>

                    }
                </div>
            )
        })
    );
}
const MyOrders = ({ user, order, retrivePurchase }) => {
    const { user_id } = user
    useEffect(() => {
        retrivePurchase(user_id)
    }, [retrivePurchase, user_id])
    return (
        <div className="container">
            {
                order.orders === null || order.orders === undefined ?

                    <p>no order yet</p> :
                    orderL(order)
            }

        </div>
    )
}
const mapStateToProps = (state) => {
    let user = {
        signin: false,
        user_id: 0
    };
    if (state.register.signin) {
        user = { ...state.register };
    } else if (state.signin.signin) {
        user = { ...state.signin };
    }

    return {
        order: state.purchase,
        user: user,
    }
}
const mapDispatchToProps = {
    retrivePurchase
}
export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);