import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const User = () => {

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


    return (
        <div className='admin'>
            <div className='container py-5'>
                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                    Ulanyjylar bölümi
                    <Link to="/"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <table className="table">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Ulanyjy Ady</th>
                                    <th scope="col">E-mail adresi</th>
                                    <th scope="col">Açar sözi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>************</td>
                                        </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User