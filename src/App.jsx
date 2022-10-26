import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Card from './components/Card'
import data from './assets/data/data'

function App() {

  const cards = data.map( item => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      ></Card>
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <Container>
        {cards}
      </Container>
    </div>
  )
}

export default App
