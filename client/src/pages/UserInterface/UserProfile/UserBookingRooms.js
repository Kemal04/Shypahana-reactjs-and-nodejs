import { faBook, faCommentAlt, faEye, faHeart, faHotel, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const UserBookingRooms = () => {

    let { id } = useParams();
    const [user, setUser] = useState("");
    const { authState } = useContext(AuthContext);

    const [booking, setBooking] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3002/auth/basicinfo/${id}`).then((response) => {
            setUser(response.data);
        });
    }, [id]);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const res = await axios.get("http://localhost:3002/bookings?userId=" + id)
                setBooking(res.data.booking)
            } catch (err) {
                console.log(err)
            }
        }
        fetchBooking()
    }, [id])


    return (
        <>
            <div className="container my-5">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 col-lg-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="/img/icons/user.svg" alt="Admin" className="rounded-circle img-fluid" width="150" />
                                        <div className="mt-3">
                                            <h4>{user.name}</h4>
                                            <p className="text-secondary mb-1">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <Link to={`/ulanyjy-profili/${authState.id}`} className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faBook} /> Maglumatlar</Link>
                                <Link to={`/ulanyjy-profili/bronlanan-otaglarym/${authState.id}`} className="list-group-item list-group-item-action active"><FontAwesomeIcon icon={faHotel} /> Bronlan otaglarym</Link>
                                <Link className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faCommentAlt} /> Habarlaşmak</Link>
                                <Link className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faNewspaper} /> Habarlar</Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className='row'>
                                {booking.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map(room => (
                                    <div key={room.room.id} className='col-lg-6'>
                                        <div className="card mb-5 border-0 shadow rounded-0 me-3">
                                            <img src={room.room.img} className="img-fluid" alt={room.room.name} />
                                            <div className="card-body">
                                                <div className='d-flex justify-content-between'>
                                                    <h5 className="card-title">№ {room.room.name} otag</h5>
                                                </div>
                                                <p className="card-text text-green mb-4">
                                                    <span className='h4'>{room.room.price}<sup>TMT</sup></span>
                                                    <span className='h6 small' style={{ fontWeight: "500", color: "#afb4bf" }}> / Günlük</span>
                                                </p>
                                                <div className='row justify-content-between align-items-center mb-3'>
                                                    <div className='col-lg-6'>
                                                        <div style={{ fontWeight: "500", color: "#afb4bf" }}>Meýdany:</div>
                                                        <div>{room.room.size} ft</div>
                                                    </div>
                                                    <div className='col-lg-6 text-end'>
                                                        <div style={{ fontWeight: "500", color: "#afb4bf" }}>Adam sany:</div>
                                                        <div>{room.room.capacity} adam</div>
                                                    </div>
                                                </div>
                                                <div className='row justify-content-between align-items-center mb-3'>
                                                    <div className='col-lg-6'>
                                                        <div style={{ fontWeight: "500", color: "#afb4bf" }}>Görüldi:</div>
                                                        <div><FontAwesomeIcon icon={faEye} /> {room.room.viwed}</div>
                                                    </div>
                                                    <div className='col-lg-6 text-end'>
                                                        <div style={{ fontWeight: "500", color: "#afb4bf" }}>Halandy:</div>
                                                        <div><FontAwesomeIcon icon={faHeart} /> {room.room.liked}</div>
                                                    </div>
                                                </div>
                                                <div className='row justify-content-between align-items-center mb-5'>
                                                    <div className='col-lg-12'>
                                                        <div style={{ fontWeight: "500", color: "#afb4bf" }}>Giriş wagtyň:</div>
                                                        <div>{room.checkIn}</div>
                                                    </div>
                                                    <div className='col-lg-12 mt-3'>
                                                        <div style={{ fontWeight: "500", color: "#afb4bf" }}>Çykyş wagtyň:</div>
                                                        <div>{room.checkOut}</div>
                                                    </div>
                                                    <div className='col-lg-12 mt-3'>
                                                        <div style={{ fontWeight: "500", color: "#afb4bf" }}>Telefon belgisi:</div>
                                                        <div>+993 {room.phoneNumber}</div>
                                                    </div>
                                                </div>
                                                <div className='d-grid'>
                                                    <div className='btn btn-sm btn-green disabled'>Bronlanan</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default UserBookingRooms