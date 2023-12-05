import Menu from './components/menu/menu.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Body from './components/Body/body.jsx'
import Desenhos from './components/Desenhos/desenhos.jsx'
import { Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
     <Navbar/>

     <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/desenhos" element={<Desenhos/>} />
        </Routes>
    </>
  )
}

export default App
