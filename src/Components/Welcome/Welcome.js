import welcome from '../../assets/welcome.jpg'
const Welcome = () => {
    return (
        <div className="container mt-5">
            <img src={welcome} alt="Avatar" style={{ width: '100%', height: 460 }}></img>
        </div>
    )
};

export default Welcome;