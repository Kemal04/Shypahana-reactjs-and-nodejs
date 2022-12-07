import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import './Home.css'
import { faBed, faMapMarkedAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

function Home() {

    const [resorts, setResorts] = useState([])

    useEffect(() => {
        const fetchAllResorts = async () => {
            try {
                const res = await axios.get('http://localhost:3002/resorts/')
                setResorts(res.data.resorts)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllResorts()
    }, [])

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
            <div className='bg-img'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            Baş Sahypa
                        </div>
                        <div className='col-lg-12 h3 fw-normal mt-3'>
                            Şypahanalar bilen dynç alyň hem-de syýahat ediň !
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4" data-aos="fade-up">
                        <span className="mb-4 d-block text-green fw-bold text-uppercase small">Biz barada</span>
                        <h2 className="mb-4"> ARASSA HOWA </h2>
                        <p className="text-secondary">Soňky ýyllarda Türkmenistan öz ýaş tokaýlary, ýylyň dowamynda gök öwüsýän seýilgähleri, özboluşly suw çüwdürimleri, giň gök zolaklary bilen myhmanlary haýrana goýýan ýurda öwrüldi.</p>
                        <p className="text-secondary">Ýurdumyzyň künjeklerinde, aýratyn-da, gözel paýtagtymyzyň töweregindäki dag eteklerinde el bilen döredilen ýaýlalar gök öwüsýär. Häzirki döwürde baýyrlyklar pürli we saýaly agaçlary bilen gözüňi dokundyrýar.</p>
                        <p className="mt-5"><Link to="/about" className="btn btn-green">Köp maglumatlar</Link></p>
                    </div>
                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                        <div className='row justify-content-center'>
                            <div className='col-lg-4'>
                                <img src='img/cards/about-1.jpg' className='img-fluid' alt='biz-barada' />
                            </div>
                            <div className='col-lg-4 mt-5'>
                                <img src='img/cards/about-2.jpg' className='img-fluid' alt='biz-barada' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-3'>
                <div className="container my-5 py-5">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-4 d-block text-green fw-bold text-uppercase smal">Şypahanalar</span>
                        <h2 className="mb-4 fw-bold">Iň Meşhur Şypahanalar</h2>
                    </div>
                    <Splide options={options} hasTrack={false}>
                        <SplideTrack className='row'>

                            {resorts.map(resort => (
                                <SplideSlide className='col-lg-6 mb-3' key={resort.id}>
                                    <div className="card bg-light border-0 shadow mx-3">
                                        <img src={resort.img} className="card-img-top" alt={resort.name} style={{ height: "280px" }} />
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between'>
                                                <h5 className="card-title">{resort.name}</h5>
                                                <div>
                                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                                </div>
                                            </div>

                                            <p className="card-text text-secondary">Görülen adam sany | {resort.viewed}</p>
                                            <div className='d-flex justify-content-between text-secondary border-bottom pb-3 mb-3'>
                                                <div>Masažy</div>
                                                <div>Bar</div>
                                            </div>
                                            <div className='d-flex justify-content-between text-secondary border-bottom pb-3 mb-3'>
                                                <div>Tok masažy</div>
                                                <div>Bar</div>
                                            </div>
                                            <div className='d-flex justify-content-between text-secondary border-bottom pb-3'>
                                                <div>Daş masažy</div>
                                                <div>Yok</div>
                                            </div>
                                            <div className='mb-3 text-center h4'>. . .</div>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-green" type="button">Otaglaryny gör</button>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))
                            }

                        </SplideTrack>
                    </Splide>
                </div>
            </div>

            <div className='home-bg-fixed d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center mb-3 text-white small'>
                            Web Sahypasy barada düşünje
                        </div>
                        <div className='col-lg-12 text-center mb-3 text-white h2'>
                            Web Sahypasyna düşünmedim,<br /> näme etmeli ?
                        </div>
                        <div className='col-lg-12 text-center'>
                            <Link to='/about'><img src='img/icons/video.svg' alt='' className='img-fluid' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5'>
                <div className="container my-5 py-5">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-4 d-block text-green fw-bold text-uppercase smal">Şypahanalar</span>
                        <h2 className="mb-4 fw-bold">Iň Meşhur Şypahanalar</h2>
                    </div>

                    <nav>
                        <div className="nav nav-tabs border-0 d-flex justify-content-center" id="nav-tab" role="tablist">
                            <button className="nav-link mx-3 btn btn-green border-0 px-5 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Irdenlik</button>
                            <button className="nav-link mx-3 btn btn-green border-0 px-5" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Öýlänlik</button>
                            <button className="nav-link mx-3 btn btn-green border-0 px-5" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Agşamlyk</button>
                        </div>
                    </nav>
                    <div className="tab-content mt-5" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/2.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/3.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/2.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/3.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/2.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/3.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/2.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/3.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/2.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/3.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-2">
                                                        <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="card-body">
                                                            <div className='row align-items-center'>
                                                                <div className='col-lg-9'>
                                                                    <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                    <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                </div>
                                                                <div className='col-lg-3'>
                                                                    <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/2.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/3.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className="card border-0 shadow-sm rounded-0 mb-3">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-2">
                                                                <img src="img/foods/1.jpg" className="img-fluid rounded-circle h-75 w-75 ms-3 py-2" alt="img" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <div className="card-body">
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-lg-9'>
                                                                            <h5 className="card-title">Grilled Beef with potatoes</h5>
                                                                            <p className="card-text fst-italic small">Et, pomidor, hyýar, ýumurtga</p>
                                                                        </div>
                                                                        <div className='col-lg-3'>
                                                                            <span className='h4'>100 </span><sup className='text-green'> TMT</sup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-bg-fixed d-flex align-items-center text-white'>
                <div className='container d-flex justify-content-center'>
                    <div className='w-75'>
                        <form className='row'>
                            <div className='col-lg-6'>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Ady</label>
                                    <input name='name' type="text" className="form-control rounded-0 border-0 opacity-08" />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">E-mail adresi</label>
                                    <input name='email' type="email" className="form-control rounded-0 border-0 opacity-08" />
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Temasy</label>
                                    <input name='subject' type="text" className="form-control rounded-0 border-0 opacity-08" />
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Teklip bermek</label>
                                    <textarea name='text' className="form-control rounded-0 border-0 opacity-08" rows="5"></textarea>
                                </div>
                            </div>
                            <div className='col-lg-12 mt-3 d-grid gap-2'>
                                <button className='btn btn-outline-green' type='submit'>Ugrat</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home