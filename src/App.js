
import './App.css';
import Header from './components/Header'
import Footer from './components/Foooter';
import Card from './components/Card';
import { useState } from 'react';
import data from './data/db.json';
import Colors from './components/Colors';

function App() {
  const [query, setQuery] = useState('')
  const [serchRes, setSerchRes] = useState(data)
  const handleinputChange = (event) => {
    setQuery(event.target.value)


    const filter = data.filter(item =>
      item.title.includes(event.target.value)

    )

    setSerchRes(filter)
  }

  return (
    <div className="App">
      <Header />
      <Colors />

      <div className='container'>

        {/* <Card /> */}
        {
          data.map((item) => <Card title={item.title} image={item.image} />)
        }

      </div>
      <Footer />

    </div>
  );
}

export default App;
