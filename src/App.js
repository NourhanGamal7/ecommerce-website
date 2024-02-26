import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Setting from './pages/Setting'

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

const App = () => {
  return (

    <Router>
       <Navbar/>
     <div className="container main">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/settings' element={<Setting />} />
      </Routes>
     </div>
     <Footer/> 
    </Router>
    
   
  )
}

export default App