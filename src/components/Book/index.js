import "./Book.css"


const Book = ({name, image, author}) => {
    return(
        <div className="book">
            <div className="header">
                <img src={image} alt="Imagem de um cara Alpha"/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{author}</h5>
            </div>
        </div>
    )
}

export default Book