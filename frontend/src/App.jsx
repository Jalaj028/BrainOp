import React from 'react'
import './App.css'
import UserLogin from './components/UserLogin'
import { Typography } from '@mui/material'
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserSignup from './components/UserSignup'
import Home from './components/Front'
import Posts from './components/Posts'
import AddPost from './components/addPost'
import Post from './components/post'
import Footer from './components/footer'


function App() {

  return (
    <>
            <Router>
               <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<UserLogin />} />
                <Route path='/signup' element={<UserSignup />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/addPost' element={<AddPost />} />
                <Route path='/post/:postId' element={<Post />} />
              </Routes>
              <Footer />
            </Router>
    </>
  )
}

export default App
