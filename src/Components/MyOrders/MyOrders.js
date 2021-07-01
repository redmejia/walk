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
                            {/* {orderList.totals[ii].total} */}
                            {
                                i.product.status_code === 5 ?
                                    <div>
                                        <p>
                                            <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                Somethig went wrong
                                            </button>
                                        </p>
                                        <div class="collapse" id="collapseExample">
                                            <div class="card card-body">
                                                Could not compleate transaction
                                                {/* Could not compleate transaction of {orderList.totals[0].total} */}
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div class="col-4" >
                                        <button className="btn btn-danger" onClick={() => alert(i.pur_id)} >cancel my order</button>
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
                order.orders.length === 0 ?
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