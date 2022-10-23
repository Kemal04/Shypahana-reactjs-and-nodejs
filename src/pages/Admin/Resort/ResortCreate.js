import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function ResortCreate() {

    const [resort, setResort] = useState({
        name: "",
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

        try {
            await axios.post("http://localhost:3001/resorts/", resort)
            navigate("/shypahanalar")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            Şypahana goş
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5 py-5'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input name='name' onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input name='address' onChange={handleChange} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                        <input name='phoneNumber' onChange={handleChange} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Img</label>
                        <input name='img' onChange={handleChange} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ResortCreate