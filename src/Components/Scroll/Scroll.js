const Scroll = (props) => (
    <div style={{ overflowY: 'scroll', paddingTop: 20, paddingBottom: 20, marginBottom: 40, marginRight:200 , marginLeft: 50 }}>
        {props.children}
    </div>
)
export default Scroll;