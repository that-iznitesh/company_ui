import {  BrowserRouter ,Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Tutors from './components/Tutors'
import Resources from './components/Resources'
import Contactus from './components/Contactus'
import Home from './components/Home'
import Expert_tutors from './div_route/Expert_tutors'
import Study_materials from './div_route/Study_materials'
import Mock_tests_feedback from './div_route/Mock_tests_feedback'
import Read_Write from './div_route/Read_Write'
import Test from './div_route/test'
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
          
          <Route path='/expert-tutors' element={<Expert_tutors />}></Route>
          <Route path='/study-materials' element={<Study_materials />}></Route>
          <Route path='/mock-tests-feedback' element={<Mock_tests_feedback />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/read_write' element={<Read_Write />}></Route>
         </Routes>

    </BrowserRouter>

  )
}

export default App
