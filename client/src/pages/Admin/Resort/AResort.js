import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { faPencil, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const AResort = () => {

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

    const handleDelete = async (id) => {

        await axios.delete('http://localhost:3002/resorts/delete/' + id)
            .then((res) => {
                toast.success(res.data.success)
                window.location.reload()
            }).catch((error) => {
                toast.error(error.message)
            });

    }

    return (
        <div className='admin'>
            <div className='container py-5'>
                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                    Şypahanalar bölümi
                    <Link to="/admin/shypahana-gosmak"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
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
                                        <h5 className="card-title">{resort.name}</h5>
                                        <div>
                                            <Link className='btn btn-outline-warning mx-1' to={`/admin/shypahana-uytget/${resort.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                            <button className='btn btn-outline-danger mx-1' onClick={() => handleDelete(resort.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
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
                                        <button className="btn btn-green" type="button">Köp maglumat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AResort