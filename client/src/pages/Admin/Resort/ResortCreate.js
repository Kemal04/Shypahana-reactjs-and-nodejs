import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function ResortCreate() {

    const [resort, setResort] = useState({
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
        img: null
    })

    const handleChange = (e) => {
        setResort((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()

        if (!resort.name) {
            toast.error("Adyny ýazyň")
        }
        else if (!resort.email) {
            toast.error("E-mail adresini ýazyň")
        }
        else if (!resort.address) {
            toast.error("Adresini ýazyň")
        }
        else if (!resort.img) {
            toast.error("Suraty goymagy unutdyňyz")
        }
        else if (!resort.phoneNumber) {
            toast.error("Telefon belgisini ýazyň")
        }
        else if (resort.phoneNumber.length < 8) {
            toast.error("Telefon belgisi 8 sandan ybarat bolmaly")
        } else {
            await axios.post("http://localhost:3002/resorts/create", resort)
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/shypahanalar")
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
                                Şypahana Goşmak
                            </div>
                            <form className='row'>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Şypahanaň Ady</label>
                                    <input name='name' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" placeholder='Arçman' />
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Şypahanaň e-mail adresi</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text rounded-0" id="basic-addon1">@</span>
                                        <input name='email' onChange={handleChange} type="email" className="form-control rounded-0" aria-describedby="basic-addon1" autoComplete="off" placeholder='archmansypahanasy@gmail.com' />
                                    </div>
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Şypahanaň salgysy</label>
                                    <input name='address' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" placeholder='Ahal welaýat, Bäherden etrabynyň, Arçman şypahanasy' />
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Şypahanaň telefon belgisi</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text rounded-0" id="basic-addon1">+993</span>
                                        <input name='phoneNumber' onChange={handleChange} type="number" className="form-control rounded-0" aria-describedby="basic-addon1" autoComplete="off" placeholder='92-19-53' />
                                    </div>
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Şypahanaň suraty</label>
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

export default ResortCreate