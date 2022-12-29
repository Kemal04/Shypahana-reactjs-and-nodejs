import React from 'react'
import './Navbar.css'
import $ from 'jquery';
import { NavLink } from 'react-router-dom'

function Navbar({ authState }) {

    const logout = () => {
        localStorage.removeItem("accessToken");
        window.location.reload()
    };

    return (
        <div className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink to="/" className="navbar-brand text-white fw-bold">
                    <img src='/img/logo.svg' alt='logo' style={{ width: "50px" }} /> Şypahanalar
                </NavLink>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto ">
                        <NavLink to="/" className="nav-item nav-link line text-uppercase me-3">bas sahypa</NavLink>
                        <NavLink to="/about" className="nav-item nav-link line text-uppercase me-3">biz barada</NavLink>
                        <NavLink to="/shypahanalar" className="nav-item nav-link line text-uppercase me-3">şypahanalar</NavLink>
                        <NavLink to="/otaglar" className="nav-item nav-link line text-uppercase me-3">otaglar</NavLink>
                        <NavLink to="/gallery" className="nav-item nav-link line text-uppercase me-3">galereýa</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link line text-uppercase me-3">habarlaşmak</NavLink>
                    </div>
                    <div className='ms-auto'>
                        {
                            !authState.status
                                ?
                                <NavLink to="/login" className='btn btn-outline-green rounded-0 fw-bold'>Giriş</NavLink>
                                :
                                <div className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ letterSpacing: "1px" }}>
                                            {authState.email}
                                        </NavLink>
                                        <ul className="dropdown-menu rounded-0">
                                            <li><NavLink to={`/ulanyjy-profili/${authState.id}`} className="dropdown-item bg-white text-black">Profile</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button onClick={logout} className="dropdown-item bg-white text-black">Logout</button></li>
                                        </ul>
                                    </li>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

});

export default Navbar