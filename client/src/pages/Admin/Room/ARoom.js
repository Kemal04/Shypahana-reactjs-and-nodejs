import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { faArrowRight, faEye, faHeart, faPencil, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ARoom = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await axios.get('http://localhost:3002/rooms')
                setRooms(res.data.rooms)
            } catch (err) {
                console.log(err)
            }
        }
        fetchRooms()
    }, [])

    const handleDelete = async (id) => {

        await axios.delete('http://localhost:3002/rooms/delete/' + id)
            .then((res) => {
                window.location.reload()
                toast.success(res.success)
            }).catch((error) => {
                toast.error(error.message)
            });

    }

    return (
        <div className='admin'>
            <div className='container py-5'>
                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                    Otaglar bölümi
                    <Link to="/admin/otag-gosmak"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                </div>
                <div className='row'>
                    {rooms.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map(room => (
                        <div key={room.id} className='col-lg-4'>
                            <div className="card mb-5 border-0 shadow rounded-0 me-3">
                                <img src={room.img} className="img-fluid" alt={room.name} />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">№ {room.name} otag</h5>
                                        <div>
                                            <Link className='btn btn-outline-warning mx-1' to={`/admin/otag-uytget/${room.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                            <button className='btn btn-outline-danger mx-1' onClick={() => handleDelete(room.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </div>
                                    </div>
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
        </div>
    )
}

export default ARoom