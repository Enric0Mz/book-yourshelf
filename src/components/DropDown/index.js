import "./DropDown.css"

const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select onChange={event=> props.onChange(event.target.value)} required={props.mandatory} >
                    {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown