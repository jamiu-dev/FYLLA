
import './App.css'
import About from './Componenets/AboutUs/About'
import Center from './Componenets/CenterView/Center'
import Find_us from './Componenets/FindUs/Find_us'
import NavBar from "./Componenets/Nav_bar/NavBar"
import Team from './Componenets/TheTeam/Team'
function App() {


  return (
    <div>
      <NavBar/>
      <Center/>
      <About/>
      <Team/>
      <Find_us/>
    </div>
  )
}

export default App
