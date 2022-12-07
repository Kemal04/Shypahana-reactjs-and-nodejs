import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingCreate = ({ authState }) => {

    const location = useLocation();
    const roomId = location.pathname.split("/")[2];
    const navigate = useNavigate()

    const [room, setRoom] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [booking, setBooking] = useState({
        userId: authState.id,
        roomId: roomId,
        checkIn: startDate,
        checkOut: endDate,
        phoneNumber: "",
        mark: "",
    });


    const handleChange = (e) => {
        setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

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

    
    const bookingRoom = async (e) => {
        e.preventDefault()

        if (!startDate) {
            toast.error("Giriş wagtyny ýazyň")
        }
        else if (!endDate) {
            toast.error("Çykyş wagtyny ýazyň")
        }
        else if (!booking.phoneNumber) {
            toast.error("Telefon belgiňizi ýazyň")
        }
        else {
            await axios.post("http://localhost:3002/booking/create", booking)
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/")
                }).catch((error) => {
                    toast.error(error.message)
                });
        }
    }

    return (
        <div>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            № {room.name} Otag
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-9 col-md-8 py-2">
                        <div className="my-3">
                            <form id="order-form">
                                <div className="row">

                                    <div className="col-sm-6 mb-4">
                                        <div className="form-group">
                                            <label className="fw-bold">
                                                Telefon belgiňiz
                                            </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">+993</span>
                                                </div>
                                                <input type="number" min="60000000" max="65999999" className="form-control " name="phoneNumber" required onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div className="d-flex justify-content-between mb-3">
                                            <div>
                                                <div className="fw-bold">Check in</div>
                                                <DatePicker name='checkIn' selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </div>
                                            <div>
                                                <div className="fw-bold">Check out</div>
                                                <DatePicker name='checkOut' selected={endDate} onChange={(date) => setEndDate(date)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 mt-3">
                                        <div className="form-group">
                                            <label className="fw-bold">Bellikleriňiz</label>
                                            <textarea name="mark" className="form-control" rows="4" onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 py-2">
                        <div className="h4 text-primary border-bottom py-2 d-none d-md-block">№ {room.name} otag</div>
                        <div className="text-end my-3">
                            <div className="mb-3">
                                <div className="mb-2">
                                    <span className="text-secondary">
                                        Bahasy :
                                    </span>
                                    <span className="h5 text-dark fw-bold mb-0 ms-1">
                                        {room.price}
                                    </span>
                                    <small> TMT</small>
                                </div>
                                <div className="mb-2">
                                    <span className="text-secondary">
                                        Adam sany :
                                    </span>
                                    <span className="h5 text-dark fw-bold mb-0 ms-1">
                                        {room.capacity}
                                    </span>
                                    <small> adam</small>
                                </div>
                                <div className="mb-2">
                                    <span className="text-secondary">
                                        Tutýan meýdany :
                                    </span>
                                    <span className="h5 text-dark fw-bold mb-0 ms-1">
                                        {room.size}
                                    </span>
                                    <small> ft</small>
                                </div>
                            </div>
                        </div>

                        <div className='d-grid'>
                            <button onClick={bookingRoom} type="submit" className="btn btn-lg btn-primary btn-block text-white fw-bold" id="buy-now">
                                Bronlamak
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCreate