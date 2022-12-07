import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const RoomCreate = () => {

    const [room, setRoom] = useState({
        resortId: "",
        name: "",
        price: "",
        capacity: "",
        size: "",
        img: ""
    })

    const [resorts, setResorts] = useState([])

    const handleChange = (e) => {
        setRoom((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

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

    const handleClick = async (e) => {
        e.preventDefault()

        if (!room.resortId) {
            toast.error("Şypahanany saýlaň")
        }
        else if (!room.name) {
            toast.error("Adyny ýazyň")
        }
        else if (!room.price) {
            toast.error("Bahasyny ýazyň")
        }
        else if (!room.capacity) {
            toast.error("Adam sanyny ýazyň")
        }
        else if (!room.img) {
            toast.error("Suraty goymagy unutdyňyz")
        }
        else if (!room.size) {
            toast.error("Tutýan meýdanyny ýazyň")
        } else {
            await axios.post("http://localhost:3002/rooms/create", room)
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/otaglar")
                }).catch((error) => {
                    toast.error(error.message)
                });
        }
    }

    return (
        <div className='admin'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='my-5 py-5'>
                            <div className='d-flex justify-content-center aling-items-center h2 mb-5'>
                                Otag Goşmak
                            </div>
                            <form className='row'>

                                <div className="col-lg-12 mb-3">
                                    <select name='resortId' className="form-select" onChange={handleChange}>
                                        <option defaultValue>Sypahana sayla</option>
                                        {resorts.map(resort => (
                                            <option key={resort.id} value={resort.id}>{resort.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Otagyň Ady</label>
                                    <input name='name' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" placeholder='1' />
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Otagyň Bahasy</label>
                                    <div className="input-group mb-3">
                                        <input name='price' onChange={handleChange} type="number" className="form-control rounded-0" aria-describedby="basic-addon1" autoComplete="off" placeholder='100' />
                                        <span className="input-group-text rounded-0" id="basic-addon1">TMT</span>
                                    </div>
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Otagyň Adam Sany</label>
                                    <input name='capacity' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" placeholder='4' />
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Otagyň Tutýan Meýdany</label>
                                    <div className="input-group mb-3">
                                        <input name='size' onChange={handleChange} type="number" className="form-control rounded-0" aria-describedby="basic-addon1" autoComplete="off" placeholder='24' />
                                        <span className="input-group-text rounded-0" id="basic-addon1">ft</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Otagyň suraty</label>
                                    <input name='img' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" placeholder='' />
                                </div>

                                <div className='d-grid mt-3'>
                                    <button onClick={handleClick} type="submit" className="btn btn-green btn-green-not-hover">Goşmak</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCreate