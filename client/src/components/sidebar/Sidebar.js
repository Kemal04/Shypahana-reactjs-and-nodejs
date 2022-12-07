import { faAppleAlt, faBed, faEnvelope, faHomeAlt, faHotel, faLightbulb, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="border-0 position-static" data-bs-backdrop="false">
            <div className='position-fixed'>
                <div className="offcanvas-header justify-content-center">
                    {/* <h5 className="offcanvas-title bg-dark w-25">
                    <img src='img/logo.svg' className='img-fluid' alt='logo'/>
                </h5> */}
                    <h2 className="offcanvas-title" id="offcanvasNavbarLabel">Şypahanalar</h2>
                </div>
                <div className="offcanvas-body ps-4">
                    <div className='h5 text-green fw-bold'>Dolandyryş paneli</div>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-5">
                        <li className="nav-item d-flex align-items-center">
                            <FontAwesomeIcon className='text-secondary' icon={faHomeAlt} /><Link to="/admin" className="nav-link active ms-2 text-secondary">Dolandyryş paneli</Link>
                        </li>
                    </ul>
                    <div className='h5 text-green fw-bold'>Bölümler</div>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-5">
                        <li className="nav-item d-flex align-items-center">
                            <FontAwesomeIcon className='text-secondary' icon={faUserAlt} /><Link to="/admin/ulanyjylar" className="nav-link active ms-2 text-secondary">Ulanyjylar</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <FontAwesomeIcon className='text-secondary' icon={faEnvelope} /><Link to="/admin/teswirler" className="nav-link active ms-2 text-secondary">Teswirler</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <FontAwesomeIcon className='text-secondary' icon={faLightbulb} /><Link to="/admin/sorag-jogap" className="nav-link active ms-2 text-secondary">Sorag-jogap</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <FontAwesomeIcon className='text-secondary' icon={faHotel} /><Link to="/admin/shypahanalar" className="nav-link active ms-2 text-secondary">Şypahanalar</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <FontAwesomeIcon className='text-secondary' icon={faBed} /><Link to="/admin/otaglar" className="nav-link active ms-2 text-secondary">Otaglar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar