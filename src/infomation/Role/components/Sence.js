

function Sence(props) {
    return (
        <div>
            {props.children.map((item, index) => {
                return <div key={index}>{item.props.children}</div>
            })}
        </div>
    )
}

export default Sence