import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Resort.css"

const Resort = () => {

    const [resorts, setResorts] = useState([])

    useEffect(() => {
        const fetchResorts = async () => {
            try {
                const res = await axios.get('http://localhost:3002/resorts/')
                setResorts(res.data.resorts)
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

                    {resorts.map(resort => (
                        <div className='col-lg-4 mb-3' key={resort.id}>
                            <div className="card bg-light border-0 shadow mx-3">
                                <div className='d-flex justify-content-center'>
                                    <img src={resort.img} className="card-img-top" style={{ height: "250px" }} alt={resort.name} />
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">{resort.name} şypahanasy</h5>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                        </div>
                                    </div>

                                    <p className="card-text text-secondary">Görülen adam sany | {resort.viewed == null ? 0 : resort.viewed}</p>
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
                                        <NavLink to={`/shypahana/${resort.id}`} className="btn btn-green" type="button">Otaglaryny gör</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    )
}
export default Resort