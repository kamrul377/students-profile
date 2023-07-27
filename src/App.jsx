
import React from 'react'
import Student from './components/Student/Student'
import Navbar from './components/Navbar/Navbar'
import AddStudent from './components/Student/AddStudent'
import Contact from './components/Contact'

import Error from './components/Error'

import { Routes, Route, Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/add-student' element={<AddStudent />} />
        <Route index element={<Student />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      

      </Routes>



      {/* <Drop /> */}


    </>
  )
}

export default App