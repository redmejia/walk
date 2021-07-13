import { useState } from "react";
import { connect } from "react-redux"
import { cancelOrder, deleteItem, incrementQty, decrementQty, makeOrder } from "../../Redux/Actions/Cart";

const sumTotal = (list) => {
    let total = 0;
    let qty = 0;
    let price = 0;
    for (let index = 0; index < list.length; index++) {
        qty = list[index].qty
        price = list[index].price
        total += qty * price
    }
    return total
}

const myOrder = (list) => {
    let myLista = [...list]
    return myLista
}
const Cart = ({ item, user, cancelOrder, deleteItem, incrementQty, decrementQty, makeOrder }) => {
    const [fName, setFirstName] = useState("");
    const [LName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState(0);
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardCv, setCardCv] = useState(0);
    let tot = sumTotal(item.items);
    let items = myOrder(item.items)
    const order = {
        client: {
            user_id: user.user_id,
            first_name: fName,
            last_name: LName,
            email: email,
            address: address,
            state: state,
            zip: parseInt(zip),
            card_name: cardName,
            card_number: cardNumber,
            cv_number: parseInt(cardCv),
        },
        items: items,
        total: parseFloat(tot.toFixed(2))
    }
    // console.log("get the order ", order);
    const makeOrderAndCleanCart = (myorder) => {
        makeOrder(myorder)
        cancelOrder() // cancel and clean order modal
    }
    return (
        <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <span class="badge rounded-pill bg-info text-dark" style={{ float: "right" }}>You have {item.count} item</span>
                            {
                                item.items.map((i) => {
                                    return (
                                        <div className="container">
                                            <img src={i.img} alt="producto" style={{ width: 200, height: 100 }}></img>
                                            <div class="row justify-content-center">
                                                <div className="col-8">
                                                    <h6>{i.product_id}</h6>
                                                    <h6>{i.pro_name}</h6>
                                                    <h6>{i.price}</h6>
                                                    <h6>{i.size}</h6>
                                                    <h6>{i.color}</h6>
                                                    <div>
                                                        <span class="badge rounded-pill bg-info text-dark" >qty {i.qty} </span>
                                                    </div>
                                                    <div>
                                                        <h5>qty</h5>
                                                        {i.qty === 1 ?
                                                            <button class="btn btn-outline-primary" disabled>-</button>
                                                            :
                                                            <button class="btn btn-outline-primary" onClick={() => decrementQty(i.product_id)}>-</button>
                                                        }
                                                        <button class="btn btn-outline-primary" onClick={() => incrementQty(i.product_id)}>+</button>
                                                    </div>
                                                    <hr></hr>
                                                </div>
                                                <div class="col-4" >
                                                    <button className="btn btn-danger" onClick={() => deleteItem(i.product_id)}>delete</button>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })
                            }
                            <h1>total : {tot.toFixed(2)}</h1>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={cancelOrder}>cancel order</button>
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h1>your order</h1>
                            <h4 class="mb-3">Billing address</h4>
                            <form class="needs-validation" novalidate>

                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="firstName" class="form-label">First name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" required onChange={e => setFirstName(e.target.value)} />
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="lastName" class="form-label">Last name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" required onChange={e => setLastName(e.target.value)} />
                                    </div>

                                    <div class="col-12">
                                        <label for="username" class="form-label">Username</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text">@</span>
                                            <input type="text" class="form-control" id="username" placeholder="Username" required />
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                        <input type="email" class="form-control" id="email" placeholder="you@example.com" onChange={e => setEmail(e.target.value)} />
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required onChange={e => setAddress(e.target.value)} />
                                    </div>

                                    <div class="col-12">
                                        <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div class="col-md-5">
                                        <label for="country" class="form-label">Country</label>
                                        <select class="form-select" id="country" required>
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="state" class="form-label">State</label>
                                        <select class="form-select" id="state" required onChange={e => setState(e.target.value)}>
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                            <option>Texas</option>
                                        </select>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="zip" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="zip" placeholder="" required onChange={e => setZip(e.target.value)} />
                                    </div>
                                </div>

                                <hr></hr>
                                <h4>Payment</h4>
                                <div class="my-3">
                                    <div class="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                        <label class="form-check-label" for="credit">Credit card</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="debit">Debit card</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div class="row gy-3">
                                    <div class="col-md-6">
                                        <label for="cc-name" class="form-label">Name on card</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required onChange={e => setCardName(e.target.value)} />
                                        <small class="text-muted">Full name as displayed on card</small>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="cc-number" class="form-label">Credit card number</label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" required onChange={e => setCardNumber(e.target.value)} />
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-expiration" class="form-label">Expiration</label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-cvv" class="form-label">CVV</label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required onChange={e => setCardCv(e.target.value)} />
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div class="modal-footer">
                            {
                                user.signin ?
                                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => makeOrderAndCleanCart(order)}>proceed</button>
                                    : <button type="button" class="btn btn-outline-warning">
                                        Please signin or register
                                    </button>
                            }
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* will open firs modal  */}
            {
                item.count === 0 ?
                    <a class="btn btn-outline-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                        My Cart
                    </a> :
                    <a class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                        {item.count} ITEM IN MY CART
                    </a>
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
        item: state.cart,
        user: user,
    }
}
const mapDispatchToProps = {
    cancelOrder,
    deleteItem,
    incrementQty,
    decrementQty,
    makeOrder,
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);