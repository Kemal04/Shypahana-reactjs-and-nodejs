import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("E-mail adresiňizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post("http://localhost:3002/auth/login", {
                email: email,
                password: password,
            }).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        email: res.data.email,
                        id: res.data.id,
                        status: true,
                    });
                    navigate("/")
                    toast.success(res.data.success)
                    window.location.reload()
                }

            })
        }
    }

    return (
        <>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            Giriş Etmek
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5 py-3'>
                <div className='row align-items-center justify-content-around'>
                    <div className='col-lg-6'>
                        <img alt='' src="/img/icons/auth.svg" className="img-fluid" />
                    </div>
                    <div className='col-lg-4'>
                        <form onSubmit={loginUser} className='card p-3 shadow border-0 '>
                            <div className="mb-3 h2 text-center text-dark">
                                Giriş Etmek
                            </div>
                            <div className="mb-4">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="E-mail adresi" />
                            </div>
                            <div className="mb-4">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Açar sözi" />
                            </div>
                            <div className="d-grid mb-1">
                                <button type="submit" className="btn btn-primary">Giriş</button>
                            </div>
                            <div className='text-center mb-1 d-flex align-items-center justify-content-center'>
                                Öň agza bolmadym! <Link to="/register" className='nav-link'>Agza Bolmak</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login