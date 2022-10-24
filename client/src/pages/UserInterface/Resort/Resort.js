import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resort = () => {

    const [resorts, setResorts] = useState([])

    // const location = useLocation()
    // const [nameSearch, setNameSearch] = useState(location.state.nameSearch)
    // const [starSearch, setStarSearch] = useState(location.state.starSearch)
    // const [addresSearch, setAddresSearch] = useState(location.state.addresSearch)

    useEffect(() => {
        const fetchResorts = async () => {
            try {
                const res = await axios.get('http://localhost:3001/resorts/')
                setResorts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchResorts()
    }, [])

    return (
        <div>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            Şypahanalar
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5 py-5'>
                <div className="mb-5 text-center" data-aos="fade-up">
                    <span className="mb-4 d-block text-green fw-bold text-uppercase small">Şypahanalar</span>
                    <h2 className="mb-4 fw-bold">Meşhur Şypahanalar</h2>
                </div>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='mb-3'>
                            <div className='h5'>Şypahanalar</div>
                            <input placeholder="" type="text" className="form-control rounded-0 border" />
                        </div>
                        <div className='mb-3'>
                            <div className='h5'>Ýyldyzy</div>
                            <input placeholder="" type="text" className="form-control rounded-0 border" />
                        </div>
                        <div className='mb-3'>
                            <div className='h5'>Ýerleşýän ýeri</div>
                            <input placeholder="" type="text" className="form-control rounded-0 border" />
                        </div>
                        <div className='d-grid'>
                            <button className='btn btn-green'>Gozle</button>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            {resorts.map(resort => (
                                <div className='col-lg-12 mb-4' key={resort.id}>
                                    <div className="card px-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-md-4">
                                                <img src="img/resorts/arcman.jpg" className="card-img-top" alt={resort.name} />
                                            </div>
                                            <div className="col-md-8">
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
                                                    <p className="card-text text-secondary small">Görülen adam sany | {resort.viewed == null ? 0 : resort.viewed}</p>
                                                    <div className='bg-success text-white d-inline p-1 rounded'>Boş ýerler bar</div>
                                                    <div className='mt-2'>
                                                        <b>Adresi: </b>
                                                        <span className='small'>{resort.address}</span>
                                                    </div>
                                                    <div className='mt-1'>
                                                        <b>Hyzmatlary: </b>
                                                        <span className='small'>Masažy, Tok masažy, Daş masažy, Suw masažy, Gyzgyn suw</span>
                                                    </div>
                                                    <div className='d-flex justify-content-between mt-3'>
                                                        <div className='mt-1'>
                                                            <b>E-mail adresi: </b>
                                                            <i className='small'>{resort.email}</i>
                                                        </div>
                                                        <Link to={`/shypahana/${resort.id}`} className="btn btn-green px-1 py-2" type="button">Otaglaryny gör</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resort