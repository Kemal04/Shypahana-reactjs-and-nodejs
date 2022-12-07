import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { faBook, faCommentAlt, faHotel, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserProfile = () => {

    let { id } = useParams();
    const [user, setUser] = useState("");
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:3002/auth/basicinfo/${id}`).then((response) => {
            setUser(response.data);
        });
    }, [id]);

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
                                <Link className="list-group-item list-group-item-action active"><FontAwesomeIcon icon={faBook} /> Maglumatlar</Link>
                                <Link to={`/ulanyjy-profili/bronlanan-otaglarym/${authState.id}`} className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faHotel} /> Bronlan otaglarym</Link>
                                <Link className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faCommentAlt} /> Habarlaşmak</Link>
                                <Link className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faNewspaper} /> Habarlar</Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="list-home">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Doly Adym</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.name}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Familýam</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    . . .
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">E-mail adresim</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.email}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Telefon belgim</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    +993 . . .
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Adresim</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    . . .
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <Link to="" className="btn btn-primary">Maglumatlary düzeltmek</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default UserProfile