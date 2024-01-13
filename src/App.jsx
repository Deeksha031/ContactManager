import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { ToastContainer  , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import "./components/global.css"
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import Update from './components/Update';
const App = () => {
  return (
    <div>
      <ToastContainer/>
       <Router>
          <Nav/>
          <Routes>
              <Route path='/' element={<Contacts/>} />
              <Route path="/addcontact" element={<AddContact/>}/>
              <Route path='/update/:id' element={<Update/>}/>
          </Routes>
       </Router>
    </div>
  )
}
export default App

