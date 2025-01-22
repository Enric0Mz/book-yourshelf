import "./Genre.css"

const Genre = (props) => {
    const css = {backgroundColor: props.secondaryColor}
    return(
        <section className="genre" style={css}>
            <h3 style={{borderColor: props.mainColor}}>{props.name}</h3>
        </section>
    )

}

export default Genre