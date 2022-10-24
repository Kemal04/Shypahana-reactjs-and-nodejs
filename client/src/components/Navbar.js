import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/Navbar.css'
import $ from 'jquery';

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink to="/" className="navbar-brand text-white fw-bold">
                    <img src='logo.svg' alt='logo' style={{ width: "50px" }} /> Şypahanalar
                </NavLink>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto ">
                        <NavLink to="/" className="nav-item nav-link line text-uppercase me-3">bas sahypa</NavLink>
                        <NavLink to="/about" className="nav-item nav-link line text-uppercase me-3">biz barada</NavLink>
                        <NavLink to="/shypahanalar" className="nav-item nav-link line text-uppercase me-3">şypahanalar</NavLink>
                        <NavLink to="/gallery" className="nav-item nav-link line text-uppercase me-3">galereýa</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link line text-uppercase me-3">habarlaşmak</NavLink>
                    </div>
                    <div className='ms-auto'>
                        <NavLink to="/login" className='btn btn-outline-green rounded-0 fw-bold'>Giriş</NavLink>
                    </div>
                </div>
            </div>
        </div >
    )
}

$(document).ready(function () {
    "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

});

export default Navbar