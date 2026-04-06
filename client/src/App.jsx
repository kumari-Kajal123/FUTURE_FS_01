import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={ <Home></Home> } />
          <Route path='/about' element={<About></About>} />
          <Route path='/project' element={<Project></Project>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
