import TextField from "../TextField"
import "./Form.css"
import DropDown from "../DropDown"
import Button from "../Button"
import { useState } from "react"


const Form = (props) => {
    const genres = ["Ação", "Ficção", "Desenvolvimento Pessoal", "Romance", "Comédia", "Aventura"]

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')
    
    const onSave = (event) => {
        event.preventDefault()
        props.onBookCreate({
            name, author, image, genre
        })
        console.log("O form foi submetido => ", name, author, image, genre)
    }
    
    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite o nome do livro" value={name} whenAltered={value => setName(value)} />
                <TextField mandatory={true} label="Autor" placeholder="Digite o nome do autor" value={author} whenAltered={value => setAuthor(value)}/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem do livro" value={image} whenAltered={value => setImage(value)} />
                <DropDown 
                    mandatory={true} 
                    label="Gênero" 
                    items={genres}
                    value={genre}
                    onChange={value => setGenre(value)}
                    />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    ) 
}

export default Form