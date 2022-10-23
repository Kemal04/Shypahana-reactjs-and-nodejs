import React from 'react'

function Gallery() {
    return (
        <div>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            Galereýa
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5 my-5'>
                <div className="mb-5 text-center" data-aos="fade-up">
                    <span className="mb-4 d-block text-green fw-bold text-uppercase smal">Gallereýa</span>
                    <h2 className="mb-4 fw-bold">Ýurdumyzyň owadanlyklary</h2>
                </div>
                <div className='row g-3 text-center'>
                    <div className='col-lg-3'>
                        <img src='img/gallery/1.jpg' className='img-fluid mb-3' alt=''/>
                        <img src='img/gallery/2.jpg' className='img-fluid mb-3' alt=''/>
                    </div>
                    <div className='col-lg-3'>
                        <img src='img/gallery/4.jpg' className='img-fluid mb-3' alt=''/>
                        <img src='img/gallery/5.jpg' className='img-fluid mb-3' alt=''/>
                        <img src='img/gallery/6.jpg' className='img-fluid mb-3' alt=''/>
                    </div>
                    <div className='col-lg-3'>
                        <img src='img/gallery/2.jpg' className='img-fluid mb-3' alt=''/>
                        <img src='img/gallery/8.jpg' className='img-fluid mb-3' alt=''/>
                    </div>
                    <div className='col-lg-3'>
                        <img src='img/gallery/7.jpg' className='img-fluid mb-3' alt=''/>
                        <img src='img/gallery/9.jpg' className='img-fluid mb-3' alt=''/>
                        <img src='img/resorts/awaza.jpg' className='img-fluid mb-3' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery