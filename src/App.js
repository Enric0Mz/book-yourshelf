import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';

function App() {

  const [books, setBooks] = useState([])

  const toNewBookCreate = (book) => {
    setBooks([...books, book])
    console.log(book)
  }

  return (
    <div className="App">
      <Banner />
      <Form onBookCreate={toNewBookCreate}/>
    </div>
  );
}

export default App;
