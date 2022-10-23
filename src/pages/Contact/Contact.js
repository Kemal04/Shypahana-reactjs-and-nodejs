import React from 'react'
import { faMapMarkerAlt, faPhoneAlt, faPaperPlane, faGlobe, faUserAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

function Contact() {

    const options = {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        pagination: false,
        autoplay: false,
        breakpoints:
        {
            991: { perPage: 3, gap: '1.5rem', },
            768: { perPage: 2, gap: '1.5rem', },
            575: { perPage: 1, gap: '1rem', },
        }
    };

    return (
        <div>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            Habarlaşmak
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container my-5 py-5">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-4 d-block text-green fw-bold text-uppercase smal">Habarlaşmak</span>
                        <h2 className="mb-4 fw-bold">Şypahanalar ulgamy bilen habarlaşmak</h2>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-4 bg-green p-5 text-white shadow-lg" style={{ borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }}>
                            <div className="h3">Bize teswir galdyryň!</div>
                            <p className="mb-5">
                                Biz siziň saýtymyz we taslama işimiz baradaky teswirleriňize garaşýas
                            </p>
                            <div className="row align-items-center mb-3">
                                <div className="col-lg-3 d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div className="col-lg-8">
                                    <span className='fw-bold'>Salgymyz</span> : Aşgabat ş, Magtymguly şaýoly, Türkmenistanyň TT we II instituty
                                </div>
                            </div>
                            <div className="row align-items-center mb-3">
                                <div className="col-lg-3 d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </div>
                                <div className="col-lg-8">
                                    <span className='fw-bold'>Telefon</span>: +993 65 31-69-31
                                </div>
                            </div>
                            <div className="row align-items-center mb-3">
                                <div className="col-lg-3 d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                                <div className="col-lg-8">
                                    <span className='fw-bold'>Email</span>: info@shypahanalar.com
                                </div>
                            </div>
                            <div className="row align-items-center mb-3">
                                <div className="col-lg-3 d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </div>
                                <div className="col-lg-8">
                                    <span className='fw-bold'>Web Sahypamyz</span>: www.shypahanalar.com.tm
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 shadow-lg p-5 bg-white" style={{ borderTopRightRadius: "30px", borderBottomRightRadius: "30px" }}>
                            <h3 className="mb-4">Habarlaşyň</h3>
                            <form className="contactForm">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label className="label" >Doly adyňyz</label>
                                            <input type="text" className="form-control valid rounded-0" name="name" placeholder="Kemal" aria-required="true" aria-invalid="false" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label className="label" >Email Salgynyň</label>
                                            <input type="email" className="form-control error rounded-0" name="email" placeholder="kemal@gmail.com" aria-required="true" aria-invalid="true" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label className="label" >Temaňyz</label>
                                            <input type="text" className="form-control valid rounded-0" name="subject" placeholder="Temanyz" aria-required="true" aria-invalid="false" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label className="label">Teswiriňiz</label>
                                            <textarea name="comment" className="form-control valid rounded-0" cols="30" rows="4" placeholder="Teswiriniz" aria-required="true" aria-invalid="false" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-green mt-3 px-5" style={{ borderRadius: "30px" }}>Ugrat</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mb-5 pb-5'>
                <div className="mb-5 text-center" data-aos="fade-up">
                    <span className="mb-4 d-block text-green fw-bold text-uppercase smal">Habarlaşmak</span>
                    <h2 className="mb-4 fw-bold">Şypahanalar ulgamynyň teswirleri</h2>
                </div>
                <Splide options={options} hasTrack={false}>
                    <SplideTrack>

                        <SplideSlide>
                            <div class="card bg-white mx-4">
                                <div class="card-header text-muted border-bottom-0 py-3 d-flex justify-content-between">
                                    <div><FontAwesomeIcon icon={faUserAlt} /> Kemal </div>
                                </div>
                                <div class="card-body py-4">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="text-muted text-sm mb-3">
                                                <b>Temasy :</b> Bagabat şypahanasy hakynda
                                            </p>
                                            <p class="text-muted text-sm mb-3">
                                                <b>Teswiri :</b> Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın kısaca Lipsum, masaüstü yayıncılık ve basın yayın ...
                                            </p>
                                        </div>
                                        <div class="col-5 text-center">
                                            <img src="img/icons/user.svg" class="img-circle img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="text-right">
                                        <div class="btn btn-sm bg-teal">
                                            <div><FontAwesomeIcon icon={faEnvelope} /> kemalhojayew04@gmail.com </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="card bg-white mx-4">
                                <div class="card-header text-muted border-bottom-0 py-3 d-flex justify-content-between">
                                    <div><FontAwesomeIcon icon={faUserAlt} /> Mergen </div>
                                </div>
                                <div class="card-body py-4">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="text-muted text-sm mb-3">
                                                <b>Temasy :</b> Arçman şypahanasy hakynda
                                            </p>
                                            <p class="text-muted text-sm mb-3">
                                                <b>Teswiri :</b> Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın kısaca Lipsum, masaüstü yayıncılık ve basın yayın ...
                                            </p>
                                        </div>
                                        <div class="col-5 text-center">
                                            <img src="img/icons/user.svg" class="img-circle img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="text-right">
                                        <div class="btn btn-sm bg-teal">
                                            <div><FontAwesomeIcon icon={faEnvelope} /> mmuhammedow44@gmail.com </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="card bg-white mx-4">
                                <div class="card-header text-muted border-bottom-0 py-3 d-flex justify-content-between">
                                    <div><FontAwesomeIcon icon={faUserAlt} /> Yunus </div>
                                </div>
                                <div class="card-body py-4">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="text-muted text-sm mb-3">
                                                <b>Temasy :</b> Awaza şypahanasy hakynda
                                            </p>
                                            <p class="text-muted text-sm mb-3">
                                                <b>Teswiri :</b> Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın kısaca Lipsum, masaüstü yayıncılık ve basın yayın ...
                                            </p>
                                        </div>
                                        <div class="col-5 text-center">
                                            <img src="img/icons/user.svg" class="img-circle img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="text-right">
                                        <div class="btn btn-sm bg-teal">
                                            <div><FontAwesomeIcon icon={faEnvelope} /> yunus2094@gmail.com </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="card bg-white mx-4">
                                <div class="card-header text-muted border-bottom-0 py-3 d-flex justify-content-between">
                                    <div><FontAwesomeIcon icon={faUserAlt} /> Kerim </div>
                                </div>
                                <div class="card-body py-4">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="text-muted text-sm mb-3">
                                                <b>Temasy :</b> Mollagara şypahanasy hakynda
                                            </p>
                                            <p class="text-muted text-sm mb-3">
                                                <b>Teswiri :</b> Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın kısaca Lipsum, masaüstü yayıncılık ve basın yayın ...
                                            </p>
                                        </div>
                                        <div class="col-5 text-center">
                                            <img src="img/icons/user.svg" class="img-circle img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="text-right">
                                        <div class="btn btn-sm bg-teal">
                                            <div><FontAwesomeIcon icon={faEnvelope} /> kerim1120@gmail.com </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                    </SplideTrack>
                </Splide>
            </div>
        </div >
    )
}

export default Contact