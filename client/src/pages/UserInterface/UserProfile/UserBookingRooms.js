import { faBook, faCommentAlt, faHotel, faNewspaper } from '@fortawesome/free-solid-svg-icons';
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
    const [room, setRoom] = useState([]);

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


    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await axios.get("http://localhost:3002/bookings?roomId=" + id)
                setBooking(res.data.booking)
            } catch (err) {
                console.log(err)
            }
        }
        fetchRoom()
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
                                <Link className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faBook} /> Maglumatlar</Link>
                                <Link to={`/ulanyjy-profili/bronlanan-otaglarym/${authState.id}`} className="list-group-item list-group-item-action active"><FontAwesomeIcon icon={faHotel} /> Bronlan otaglarym</Link>
                                <Link className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faCommentAlt} /> Habarlaşmak</Link>
                                <Link className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faNewspaper} /> Habarlar</Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 text-danger">
                            Bronlar{
                                booking.map(booking => (
                                    <div key={booking.id}>{booking.roomId}</div>
                                ))
                            }
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default UserBookingRooms