import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Footer.css'

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-text">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="ft-about">
                                <div className="logo">
                                    <Link to="/" className=' text-decoration-none'>
                                        <div className="text-dark h3">Şypahanalar</div>
                                    </Link>
                                </div>
                                <p>Saglyga tarap ynamly we elýeterli ýol!</p>
                                <div className="fa-social">
                                    <Link to="/"><i className="fa fa-facebook"></i></Link>
                                    <Link to="/"><i className="fa fa-instagram"></i></Link>
                                    <Link to="/"><i className="fa fa-youtube-play"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="ft-newslatter">
                                <h6>Gipersalgylar</h6>
                                <p>Baş Sahypa</p>
                                <p>Biz Barada</p>
                                <p>Galereýa</p>
                                <p>Habarlaşmak</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="ft-contact">
                                <h6>Habarlaşmak</h6>
                                <ul className='p-0'>
                                    <li>+993 65 31-69-31</li>
                                    <li>shypahanalar@gmail.com</li>
                                    <li>Aşgabat ş, Magtymguly şaýoly, Türkmenistanyň TT we II instituty</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer