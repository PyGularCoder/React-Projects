
import './App.css'
import Card from './components/card'

function App() {
  const name = "Hafeez Gul";
  let list = [1, 3, 4, 5];
  return (
   
  <Card name= {name} list = {list} />
  )
}

export default App
