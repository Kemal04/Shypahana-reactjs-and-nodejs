import React from 'react'
import { faArrowRight, faCarSide, faMapLocationDot, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            Biz Barada
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <img src='img/resorts/arcman.jpg' className='img-fluid' alt='biz-barada' />
                    </div>
                    <div className="col-lg-4" data-aos="fade-up">
                        <span className="mb-4 d-block text-green fw-bold text-uppercase small">Biz barada</span>
                        <h2 className="mb-4"> SAGLYGA TARAP ÝOL </h2>
                        <p className="text-secondary">Soňky ýyllarda Türkmenistan öz ýaş tokaýlary, ýylyň dowamynda gök öwüsýän seýilgähleri, özboluşly suw çüwdürimleri, giň gök zolaklary bilen myhmanlary haýrana goýýan ýurda öwrüldi.</p>
                        <p className="text-secondary">Ýurdumyzyň künjeklerinde, aýratyn-da, gözel paýtagtymyzyň töweregindäki dag eteklerinde el bilen döredilen ýaýlalar gök öwüsýär. Häzirki döwürde baýyrlyklar pürli we saýaly agaçlary bilen gözüňi dokundyrýar.</p>
                    </div>
                </div>
            </div>

            <div className='container my-5 py-5'>
                <div className="mb-5 text-center" data-aos="fade-up">
                    <span className="mb-4 d-block text-green fw-bold text-uppercase smal">Hyzmatlar</span>
                    <h2 className="mb-4 fw-bold">Şypahanalar ulgamynyň hyzmatlary</h2>
                </div>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-lg-4'>
                        <div className="data-card shadow rounded-0">
                            <h3><FontAwesomeIcon icon={faCarSide} className="" /></h3>
                            <h4>Ulag Hyzmaty</h4>
                            <p>Ulag hyzmatlaryndan ayratynlyklaryna goz gezdirelin</p>
                            <span className="link-text">
                                Maglumatlar <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="data-card shadow rounded-0">
                            <h3><FontAwesomeIcon icon={faMapLocationDot} className="" /></h3>
                            <h4>Syýahat Etmek</h4>
                            <p>Ulag hyzmatlaryndan ayratynlyklaryna goz gezdirelin</p>
                            <span className="link-text">
                                Maglumatlar <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="data-card shadow rounded-0">
                            <h3><FontAwesomeIcon icon={faLightbulb} className="" /></h3>
                            <h4>7/24 sorag we jogap</h4>
                            <p>Ulag hyzmatlaryndan ayratynlyklaryna goz gezdirelin</p>
                            <span className="link-text">
                                Maglumatlar <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="mb-5 text-center" data-aos="fade-up">
                    <span className="mb-4 d-block text-green fw-bold text-uppercase smal">Gallereýa</span>
                    <h2 className="mb-4 fw-bold">Şypahanalar ulgamynyň şekiller bölümi</h2>
                </div>
                <div className="row align-items-center justify-content-between pt-5">
                    <div className="col-lg-5 text-end" data-aos="fade-up">
                        <span className="mb-4 d-block text-green fw-bold text-uppercase small">Biz barada</span>
                        <h2 className="mb-4"> Gallereýa </h2>
                        <p className="text-secondary">Soňky ýyllarda Türkmenistan öz ýaş tokaýlary, ýylyň dowamynda gök öwüsýän seýilgähleri, özboluşly suw çüwdürimleri, giň gök zolaklary bilen myhmanlary haýrana goýýan ýurda öwrüldi.Ýurdumyzyň künjeklerinde, aýratyn-da, gözel paýtagtymyzyň töweregindäki dag eteklerinde el bilen döredilen ýaýlalar gök öwüsýär. Häzirki döwürde baýyrlyklar pürli we saýaly agaçlary bilen gözüňi dokundyrýar.</p>
                        <p className="mt-5"><Link to="/gallery" className="btn btn-green">Köp maglumatlar</Link></p>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end" data-aos="fade-up" data-aos-delay="100">
                        <div className='row g-3'>
                            <div className='col-lg-6 mb-1'>
                                <img src='img/gallery/6.jpg' className='img-fluid mb-3' alt='biz-barada' />
                                <img src='img/gallery/5.jpg' className='img-fluid' alt='biz-barada' />
                            </div>
                            <div className='col-lg-6 mb-1'>
                                <img src='img/gallery/2.jpg' className='img-fluid' alt='biz-barada' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About