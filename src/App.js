import React from 'react'
import TopBar from './topbar/topbar'
import HomeScreen from './HomeScreen/HomeScreen'
import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import BlogPage from './BlogPage/BlogPage';
import About from './About/About';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
   
    </BrowserRouter>
    
    </>
  )
}
