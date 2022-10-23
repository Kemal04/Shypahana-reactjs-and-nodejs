import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../../assets/Register.css"

const Auth = () => {


    const [swapPanel, setSwapPanel] = useState(false);

    const signUpButton = () => {
        setSwapPanel(true);
    };
    const signInButton = () => {
        setSwapPanel(false);
    };

    const [show, setShow] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 7000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    const navigate = useNavigate();

    const [nameReg, setNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8800/register/", {
            name: nameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            navigate("/")
        })
    }

    axios.defaults.withCredentials = true

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8800/login/", {
            email: email,
            password: password,
        }).then((response) => {

            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                navigate("/")
            }

        })
    }

    useEffect(() => {
        axios.get("http://localhost:8800/login/").then((response) => {
            if (response.data.loggedIn == true) {
                navigate("/")
            }
        })
    }, [])

    return (
        <div className='mt-5 pt-3 d-flex justify-content-center'>
            <div id="container1" className={
                ["container1", swapPanel ? "right-panel-active" : null]
                    .filter(Boolean)
                    .join(" ")
            }>
                <div className="form-container sign-up-container">
                    <form className="form align-items-center">
                        <h1 className='mb-3'>Hasap döret</h1>
                        <div className="row">
                            <div className="form-group col-lg-12 mb-3">
                                <input className='input' onChange={(e) => { setNameReg(e.target.value) }} type="text" placeholder="Ady" name="name" />
                            </div>
                            <div className="form-group col-lg-12 mb-3">
                                <input className='input' onChange={(e) => { setEmailReg(e.target.value) }} type="email" placeholder="E-mail adresi" name="email" />
                            </div>
                            <div className="form-group col-lg-12 mb-3">
                                <input className='input' onChange={(e) => { setPasswordReg(e.target.value) }} type="password" placeholder="Açar sözi" name="password" />
                            </div>
                        </div>
                        <button type="submit" className="button mt-3" onClick={handleRegister}>Hasap döret</button>
                    </form>
                </div>


                <div className="form-container sign-in-container">
                    <form className='form'>
                        <div className='text-uppercase mb-3 h2'>Içeri gir</div>
                        <input onChange={(e) => { setEmail(e.target.value) }} className='mb-3 input' type="email" placeholder="E-mail adresi" name="email" />
                        <input onChange={(e) => { setPassword(e.target.value) }} className='mb-3 input' type="password" placeholder="Açar sözi" name="password" />
                        <button className="button mt-3" onClick={handleLogin}>Içeri gir</button>
                    </form>
                </div>


                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <button className="button ghost" onClick={signInButton} type="button" id="signIn">Içeri gir</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <button className="button ghost" id="signUp" type="button" onClick={signUpButton}>Hasap döret</button>
                        </div>
                    </div>
                </div>

            </div>
            <div data-aos="fade-left" className='toast-container p-3 top-0 end-0 position-absolute' style={{ zIndex: "1000" }}>
                <div className={[loginStatus ? `toast ${show} bg-danger` : "toast"]} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Admin tarapyndan</strong>
                        <small className="text-muted">şu wagt geldi</small>
                    </div>
                    <div className="toast-body text-white">
                        {loginStatus}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Auth