import TextField from "../TextField"
import "./Form.css"
import DropDown from "../DropDown"

const Form = () => {
    const genre = ["Ação", "Ficção", "Desenvolvimento Pessoal", "Romance", "Comédia", "Aventura"]
    return (
        <section className="forms">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite o seu nome" />
                <TextField label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da sua imagem" />
                <DropDown label="Gênero" items={genre}/>
            </form>
        </section>
    ) 
}

export default Form