import { faArrowRight, faBed, faEnvelope, faHotel, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const AdminP = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await axios.get('http://localhost:3002/auth')
                setUsers(res.data.users)
            } catch (err) {
                console.log(err)
            }
        }
        fetchRooms()
    }, [])

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

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await axios.get('http://localhost:3002/rooms/')
                setRooms(res.data.rooms)
            } catch (err) {
                console.log(err)
            }
        }
        fetchRooms()
    }, [])

    
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get('http://localhost:3002/contacts/')
                setContacts(res.data.contacts)
            } catch (err) {
                console.log(err)
            }
        }
        fetchComments()
    }, [])

    return (
        <div className='admin' style={{ height: "1200px" }}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className="row bg-warning p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{users.length}</h3>
                                <p>Ulanyjy sany</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faUserAlt} />
                            </div>
                            <Link to="/admin/ulanyjylar" className="border-light border-top pt-2 nav-link text-dark pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="row bg-danger text-white p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{contacts.length}</h3>
                                <p>Teswirleri?? sany</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <Link to="/admin/teswirler" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="row bg-success text-white p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{resorts.length}</h3>
                                <p>??ypahana sany</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faHotel} />
                            </div>
                            <Link to="/admin/shypahanalar" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="row bg-primary text-white p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{rooms.length}</h3>
                                <p>Otaglary?? sany</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faBed} />
                            </div>
                            <Link to="/admin/otaglar" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminP