import './App.css'
import Card from './components/Card'
import Login from './components/Login'
import Ragister from './components/Ragister'

function App() {
  return (
    <>
    <Login/>
     <Card username="Annabale" Profile="Don't Visite the profile!!!"/>
     <Card username={"Jusst try the name "}/>
     <Card Para="Hey its my para with some changes !!"/>
    <Ragister/>

    </>
  )
}

export default App
