import { faBell, faCommentDots, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AdminNavbar = () => {
    return (
        <div>
            <div className='d-flex bg-white py-4 align-items-center justify-content-between border-bottom'>
                <div className='col-lg-3'>
                    <input type="text" className="form-control rounded-3 ms-5" placeholder='Gözleg . . .' />
                </div>
                <div className='col-lg-9 d-flex justify-content-end'>
                    <div className='d-flex align-items-center'>
                        <div className='col-lg-3 h3 px-3'>
                            <FontAwesomeIcon className='text-dark' icon={faBell} />
                        </div>
                        <div className='col-lg-3 h3 px-3'>
                            <FontAwesomeIcon className='text-dark' icon={faCommentDots} />
                        </div>
                        <div className='col-lg-3 h3 px-3'>
                            <FontAwesomeIcon className='text-dark' icon={faUserAlt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar