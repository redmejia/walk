const Scroll = (props) => (
    <div style={{ overflowY: 'scroll',  paddingTop: 20, paddingBottom: 20, marginBottom : 40 }}>
        {props.children}
    </div>
)
export default Scroll;