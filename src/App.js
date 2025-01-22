import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Genre from './components/Genre';

function App() {

  const genres = [
    {
      name: "Ação",
      mainColor: "#57C279",
      secondaryColor: "#D9F7E9"
    },
    {
      name: "Ficção",
      mainColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name: "Desenvolvimento Pessoal",
      mainColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      name: "Romance",
      mainColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      name: "Aventura",
      mainColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      name: "Comédia",
      mainColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      name: "Outros",
      mainColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]

  const [books, setBooks] = useState([])

  const toNewBookCreate = (book) => {
    setBooks([...books, book])
  }

  return (
    <div className="App">
      <Banner />
      <Form genresNames={genres.map(genre => genre.name)} onBookCreate={toNewBookCreate}/>
      {genres.map(genre => <Genre key={genre.name} name={genre.name} mainColor={genre.mainColor} secondaryColor={genre.secondaryColor}/>)}
    </div>
  );
}

export default App;
