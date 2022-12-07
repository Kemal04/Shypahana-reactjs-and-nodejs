import { faArrowRight, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

function ResortRead() {

    const [resort, setResort] = useState("");
    const [rooms, setRooms] = useState([]);

    const location = useLocation();
    const resortId = location.pathname.split("/")[2];

    useEffect(() => {
        axios.get(`http://localhost:3002/resorts/${resortId}`)
            .then((res) => { 
                setResort(res.data.resort)
                setRooms(res.data.rooms)
            })
        }, [resortId])

    return (
        <>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            {resort.name} şypahanasy
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    {rooms.map(room => (
                        <div className='col-lg-4' key={room.id}>
                            <div className="card mb-3 border-0 shadow rounded-0 me-3">
                                <img src={room.img} className="img-fluid" alt={room.name} />
                                <div className="card-body">
                                    <div className="card-title h3 mb-4">№ {room.name} otag</div>
                                    <p className="card-text text-green mb-4">
                                        <span className='h4'>{room.price}<sup>TMT</sup></span>
                                        <span className='h6 small' style={{ fontWeight: "500", color: "#afb4bf" }}> / Günlük</span>
                                    </p>
                                    <div className='row justify-content-between align-items-center mb-3'>
                                        <div className='col-lg-6'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}>Meýdany:</div>
                                            <div>{room.size} ft</div>
                                        </div>
                                        <div className='col-lg-6 text-end'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}>Adam sany:</div>
                                            <div>{room.capacity} adam</div>
                                        </div>
                                    </div>
                                    <div className='row justify-content-between align-items-center mb-5'>
                                        <div className='col-lg-6'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}>Görüldi:</div>
                                            <div><FontAwesomeIcon icon={faEye} /> {room.viwed}</div>
                                        </div>
                                        <div className='col-lg-6 text-end'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}>Halandy:</div>
                                            <div><FontAwesomeIcon icon={faHeart} /> {room.liked}</div>
                                        </div>
                                    </div>
                                    <div className='d-grid'>
                                        <Link className='btn btn-sm btn-green' to={`/otag/${room.id}`}>Maglumatlaryny gör <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ResortRead