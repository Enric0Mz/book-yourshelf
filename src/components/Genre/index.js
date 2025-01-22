import "./Genre.css"
import Book from "../Book"

const Genre = (props) => {
    const css = {backgroundColor: props.secondaryColor}
    return(
        props.books.length > 0 ? <section className="genre" style={css}>
            <h3 style={{borderColor: props.mainColor}}>{props.name}</h3>
            <div className="books">
            {props.books.map(book => <Book name={book.name} author={book.author} image={book.image}/>)}
            </div>
        </section>
        : ''
    )

}

export default Genre