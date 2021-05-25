import welcome from '../../assets/welcome.jpg'
const Welcome = () => {
    return (
        <div className="container mt-3">
            {/* Or carousel */}
            <img src={welcome} alt="Avatar" style={{ width: '100%', height: 460 }}></img>

            <h1>
                add more picture here
            </h1>
            <div className="card text-white bg-dark mb-3" >
                <div className="card-body" >
                    <div className="row">
                        <div className="col mt-3">
                            <h4>Contact</h4>
                            <p>Phone: (123) 123-1234</p>
                            <p>Email: example@mail.com</p>
                        </div>
                        <div className="col mt-3">
                            <h4>About</h4>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">We're hiring</a></p>
                            <p><a href="#">Support</a></p>
                            <p><a href="#">Find store</a></p>
                            <p><a href="#">Shipment</a></p>
                            <p><a href="#">Payment</a></p>
                            <p><a href="#">Gift card</a></p>
                            <p><a href="#">Return</a></p>
                            <p><a href="#">Help</a></p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor : 'blue', height : 5}}></div>
            </div>
        </div>
    )
};

export default Welcome;