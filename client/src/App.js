import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
//Components
import { Navbar, Footer, AdminNavbar, Sidebar } from "./components"
//UserInterface Pages
import { About, Contact, Gallery, Home, Resort, ResortRead, Room, RoomRead, Register, Login, UserProfile, UserBookingRooms } from "./pages/userInterface"
//Admin Pages
import { AdminP, ResortCreate, ResortUpdate, AResort, ARoom, RoomCreate, RoomUpdate, AContact, ContactUpdate, User, ABooking } from "./pages/admin"
//Toast Container
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//AXIOS
import axios from 'axios'
//User
import { AuthContext } from './context/AuthContext'

const App = () => {

    const [authState, setAuthState] = useState({
        email: "",
        id: 0,
        status: false,
    });

    useEffect(() => {
        axios
            .get("http://localhost:3002/auth/auth", {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            .then((response) => {
                if (response.data.error) {
                    setAuthState({ ...authState, status: false });
                } else {
                    setAuthState({
                        email: response.data.email,
                        id: response.data.id,
                        status: true,
                    });
                }
            });
    }, [authState]);


    return (
        <div>
            <AuthContext.Provider value={{ authState, setAuthState }}>
                <Router>
                    <ToastContainer />
                    <Routes>

                        <Route path="/" element={<WithNavbar authState={authState} />}>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/about' element={<About />}></Route>

                            <Route path='/register' element={<Register />}></Route>
                            <Route path='/login' element={<Login />}></Route>

                            <Route path='/shypahanalar' element={<Resort />}></Route>
                            <Route path='/shypahana/:id/' element={<ResortRead />}></Route>

                            <Route path='/otaglar' element={<Room />}></Route>
                            <Route path='/otag/:id/' element={<RoomRead authState={authState} />}></Route>

                            <Route path='/gallery' element={<Gallery />}></Route>
                            <Route path='/contact' element={<Contact />}></Route>
                        </Route>

                        <Route path="/" element={<AdminWithNavbar />}>
                            <Route path='/admin' element={<AdminP />}></Route>

                            <Route path='/admin/ulanyjylar' element={<User />}></Route>

                            <Route path='/admin/shypahanalar' element={<AResort />}></Route>
                            <Route path='/admin/shypahana-gosmak' element={<ResortCreate />}></Route>
                            <Route path='/admin/shypahana-uytget/:id/' element={<ResortUpdate />}></Route>

                            <Route path='/admin/otaglar' element={<ARoom />}></Route>
                            <Route path='/admin/otag-gosmak' element={<RoomCreate />}></Route>
                            <Route path='/admin/otag-uytget/:id/' element={<RoomUpdate />}></Route>

                            <Route path='/admin/teswirler' element={<AContact />}></Route>
                            <Route path='/admin/teswir-uytget/:id/' element={<ContactUpdate />}></Route>

                            <Route path='/admin/bronlanan-shypahanalar' element={<ABooking />}></Route>
                        </Route>
                        <Route path='/ulanyjy-profili/:id' element={<UserProfile />}></Route>
                        <Route path='/ulanyjy-profili/bronlanan-otaglarym/:id' element={<UserBookingRooms />}></Route>
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </div>
    )
}

const WithNavbar = ({ authState }) => {
    return (
        <>
            <Navbar authState={authState} />

            <Outlet />

            <Footer />
        </>
    );
}

function AdminWithNavbar() {
    return (
        <div className='row g-0 justify-content-center'>
            <div className='col-lg-2 border-end'>
                <Sidebar />
            </div>
            <div className='col-lg-10'>
                <AdminNavbar />

                <Outlet />
            </div>
        </div>
    );
}

export default App