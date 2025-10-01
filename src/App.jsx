import {  BrowserRouter ,Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Tutors from './components/Tutors'
import Resources from './components/Resources'
import Contactus from './components/Contactus'
import Home from './components/Home'
function App() {
  return (

    <BrowserRouter>
      <Navbar />
        <Routes>
           <Route path= "/" element={<Home/>} />
          <Route path= "/courses" element={<Courses/>} />
          <Route path='/tutors' element={<Tutors />}></Route>
          <Route path='/resources' element={<Resources />}></Route>
          <Route path='/contactus' element={<Contactus />}></Route>
         </Routes>

    </BrowserRouter>

  )
}

export default App
