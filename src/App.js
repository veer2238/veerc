import React from 'react'
import Header from './Common/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Search from './Common/Search/Search'
import MyContextProvider from './Common/Context/MyContextProvider'
import ContactBatch from './Common/ContactBatch/ContactBatch'
import Contact from './Contact/Contact'

const App = () => {
  return (

    <BrowserRouter>
    <MyContextProvider>

    <Header/>
    <ContactBatch/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </MyContextProvider>
    </BrowserRouter>
   
    
  )
}

export default App