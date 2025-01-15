import TextField from "../TextField"
import "./Form.css"
import DropDown from "../DropDown"
import Button from "../Button"




const Form = () => {
    const genre = ["Ação", "Ficção", "Desenvolvimento Pessoal", "Romance", "Comédia", "Aventura"]
    
    const onSave = (event) => {
        event.preventDefault()
        console.log("O form foi submetido")
    }
    
    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite o seu nome" />
                <TextField mandatory={true} label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da sua imagem" />
                <DropDown mandatory={true} label="Gênero" items={genre}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    ) 
}

export default Form