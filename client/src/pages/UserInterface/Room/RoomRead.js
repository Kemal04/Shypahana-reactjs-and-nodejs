import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

const RoomRead = ({ authState }) => {

    const location = useLocation();
    const roomId = location.pathname.split("/")[2];
    const [room, setRoom] = useState("");

    //ROOMS
    useEffect(() => {
        axios.get(`http://localhost:3002/room/${roomId}`)
            .then((res) => {
                return res.data.room
            })
            .then((resp) => {
                setRoom(resp)
            })
    }, [])


    return (
        <>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            № {room.name} Otag
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5 my-5'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-lg-8'>
                        <div className='text-center'>
                            <img src={room.img} className="img-fluid" alt={room.name} />
                        </div>
                        <div className='d-flex justify-content-between mt-5 align-items-center'>
                            <div className='h3'>№ {room.name} Otag</div>
                            <div className='d-flex justify-content-end align-items-center'>
                                <div><FontAwesomeIcon icon={faHeart} /> {room.liked}</div>
                                {
                                    !authState.status
                                        ?
                                        <Link to="/login" className='btn btn-sm btn-green ms-5 text-uppercase'>Bronlamak</Link>
                                        :
                                        <Link to={`/otag-bronlamak/${room.id}`} className='btn btn-sm btn-green ms-5 text-uppercase'>Bronlamak</Link>
                                }
                            </div>
                        </div>
                        <div className="text-green mt-4">
                            <span className='h3'>{room.price}<sup>TMT</sup></span>
                            <span className='h6 small' style={{ fontWeight: "500", color: "#afb4bf" }}> / Günlük</span>
                        </div>
                        <div className='row align-items-center'>
                            <div className='my-3 col-lg-2'>
                                <div className='my-4' style={{ color: "#afb4bf", fontWeight: "500" }}>Meýdany: </div>
                                <div className='my-4' style={{ color: "#afb4bf", fontWeight: "500" }}>Adam sany: </div>
                                <div className='my-4' style={{ color: "#afb4bf", fontWeight: "500" }}>Görüldi: </div>
                                <div className='my-4' style={{ color: "#afb4bf", fontWeight: "500" }}>Hyzmatlary: </div>
                            </div>
                            <div className='my-3 col-lg-2'>
                                <div className='my-4'><b>{room.size}</b> ft</div>
                                <div className='my-4'>Iň köp <b>{room.capacity}</b> adamlyk</div>
                                <div className='my-4'><b>{room.viwed}</b> adam gördi</div>
                                <div className='my-4'>...</div>
                            </div>
                        </div>
                        <div className='my-3'>
                            Motorhome or Trailer that is the question for you. Here are some of the advantages and disadvantages of both, so you will be confident when purchasing an RV. When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth wheeler? The advantages and disadvantages of both are studied so that you can make your choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an achievement of a lifetime. It can be similar to sojourning with your residence as you search the various sites of our great land, America.
                            <br /><br /><br />
                            The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomRead