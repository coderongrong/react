

function Sence(props) {
    return (
        <div className="p-10 main_bc w-100">
            {
                Array.isArray(props.children) ? props.children.map((item, index) => {
                    return (<div key={index}>{ item }</div>)
                }) : props.children
            }
        </div>
    )
}

export default Sence