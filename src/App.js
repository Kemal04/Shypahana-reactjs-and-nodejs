import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Auth from './pages/Auth/Auth'
import Resort from './pages/Resort/Resort'
import ResortCreate from './pages/Resort/ResortCreate'
import ResortUpdate from './pages/Resort/ResortUpdate'
import ResortRead from './pages/Resort/ResortRead'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<WithNavbar />}>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/shypahanalar' element={<Resort />}></Route>
                        <Route path='/shypahana/gosmak' element={<ResortCreate />}></Route>
                        <Route path='/shypahana/uytget/:id/' element={<ResortUpdate />}></Route>
                        <Route path='/shypahana/:id/' element={<ResortRead />}></Route>
                        <Route path='/gallery' element={<Gallery />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                    </Route>
                    <Route path='/register' element={<Auth />}></Route>
                    <Route path='/login' element={<Auth />}></Route>
                    <Route path='/user-page' element={<UserProfile />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

function WithNavbar() {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
}

export default App