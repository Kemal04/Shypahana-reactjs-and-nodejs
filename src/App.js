import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/UserInterface/About/About'
import Auth from './pages/UserInterface/Auth/Auth'
import Resort from './pages/UserInterface/Resort/Resort'
import ResortCreate from './pages/Admin/Resort/ResortCreate'
import ResortUpdate from './pages/Admin/Resort/ResortUpdate'
import ResortRead from './pages/UserInterface/Resort/ResortRead'
import Gallery from './pages/UserInterface/Gallery/Gallery'
import Contact from './pages/UserInterface/Contact/Contact'
import UserProfile from './pages/UserInterface/UserProfile/UserProfile'

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