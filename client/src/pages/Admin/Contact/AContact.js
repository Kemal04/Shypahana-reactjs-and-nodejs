import { faCommentAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AContact = () => {

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
        <div className='admin'>
            <div className='container py-5'>
                <div className='d-flex justify-content-center aling-items-center h2 mb-5'>
                    Teswirler bölümi
                </div>
                <div className='row'>
                    {contacts.map(contact => (
                        <div className='col-lg-4 mb-3' key={contact.id}>
                            <div className="card bg-light">
                                <div className="card-header text-muted border-bottom-0 small">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />{contact.email}
                                </div>
                                <div className="card-body pt-0">
                                    <div className="row align-items-center">
                                        <div className="col-7">
                                            <h2 className="lead mt-2"><b>{contact.name}</b></h2>
                                            <p className="text-muted text-sm"><b>Temasy : </b>{contact.subject}</p>
                                            <p className="text-muted text-sm"><b>Barada : </b>{contact.comment}</p>
                                        </div>
                                        <div className="col-5 text-center">
                                            <img src="/img/icons/user.svg" alt="" className="img-circle img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="text-right">
                                        <Link to="/" className="btn btn-sm bg-teal">
                                            <FontAwesomeIcon icon={faCommentAlt} />
                                        </Link>
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

export default AContact