import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Searchpage from './pages/Searchpage'
import Categorypage from './pages/Categorypage'
import Detail from './pages/Detail'
import Category from './components/Category'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Category/>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/searched/:name" element={<Searchpage />} />
          <Route path="/cuisine/:cuisine" element={<Categorypage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
