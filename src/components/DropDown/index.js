import "./DropDown.css"

const DropDown = (props) => {
    console.log(props.items)
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select>
                    {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown