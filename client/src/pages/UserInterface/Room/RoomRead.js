import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const RoomRead = ({ authState }) => {

    const location = useLocation();
    const roomId = location.pathname.split("/")[2];

    const navigate = useNavigate()

    const [room, setRoom] = useState("");

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [booking, setBooking] = useState({
        userId: authState.id,
        roomId: roomId,
        checkIn: startDate,
        checkOut: endDate,
        phoneNumber: "",
        mark: "",
    });

    const handleChange = (e) => {
        setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    //ROOMS
    useEffect(() => {
        axios.get(`http://localhost:3002/room/${roomId}`)
            .then((res) => {
                return res.data.room
            })
            .then((resp) => {
                setRoom(resp)
            })
    }, [roomId])

    const bookingRoom = async (e) => {
        e.preventDefault()

        if (!startDate) {
            toast.error("Giriş wagtyny ýazyň")
        }
        else if (!endDate) {
            toast.error("Çykyş wagtyny ýazyň")
        }
        else if (!booking.phoneNumber) {
            toast.error("Telefon belgiňizi ýazyň")
        }
        else {
            await axios.post("http://localhost:3002/booking/create", booking)
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/")
                }).catch((error) => {
                    toast.error(error.message)
                });
        }
    }


    const [likes, setLikes] = useState(100);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <>
            <div className='bg-img-small'>
                <div className='container'>
                    <div className='row aling-items-center justify-content-center text-white text-center'>
                        <div className='col-lg-12 display-1' style={{ letterSpacing: "2px" }}>
                            № {room.name} Otag
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5 my-5'>
                <div className='row justify-content-between align-items-start'>
                    <div className='col-lg-8'>
                        <div className='text-center'>
                            <img src={room.img} className="img-fluid" alt={room.name} />
                        </div>
                        <div className='d-flex justify-content-between mt-5 align-items-center'>
                            <div className='h3'>№ {room.name} Otag</div>
                            <div className='d-flex justify-content-end align-items-center'>
                                <div>
                                    <button className={`like-button ${isClicked && 'liked'}`} onClick={handleClick}>
                                        <span className="likes-counter">{`Like | ${likes}`}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-green mt-4">
                            <span className='h3'>{room.price}<sup>TMT</sup></span>
                            <span className='h6 small' style={{ fontWeight: "500", color: "#afb4bf" }}> / Günlük</span>
                        </div>
                        <div className='row g-0 align-items-center my-5'>
                            <div className='col-lg-3'>
                                <div className='card rounded-0 text-center py-4'>
                                    <div className='text-secondary fw-bold mb-2' style={{ letterSpacing: "0.6px" }}>
                                        Meýdany :
                                    </div>
                                    <div className='fw-bold'>
                                        {room.size} m<sup>2</sup>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='card rounded-0 text-center py-4'>
                                    <div className='text-secondary fw-bold mb-2' style={{ letterSpacing: "0.6px" }}>
                                        Adam sany :
                                    </div>
                                    <div className='fw-bold'>
                                        {room.capacity} adam
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='card rounded-0 text-center py-4'>
                                    <div className='text-secondary fw-bold mb-2' style={{ letterSpacing: "0.6px" }}>
                                        Görüldi :
                                    </div>
                                    <div className='fw-bold'>
                                        {room.viwed} adam gördi
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='card rounded-0 text-center py-4'>
                                    <div className='text-secondary fw-bold mb-2' style={{ letterSpacing: "0.6px" }}>
                                        Hyzmatlary :
                                    </div>
                                    <div className='fw-bold'>
                                        Masajlar, Tok masaj ...
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-3 h6 fw-normal' style={{ lineHeight: "25px", color: "#636a76", wordSpacing: "3px" }}>
                            Arçmanyň şypaly suwy himiki düzümi boýunça kükürtli-hlorly-gidrokarbonatly, natrili-kalsili-magnili, gowşak aşgarlanan suwlar toparyna degişlidir. Şypaly suwy içmek, suwa düşmek, içegeleri ýuwmak arkaly bejerginiň dürli usullary ulanylýar. Ol beden agzalarynyň işjeňligini kadalaşdyrýar. Şypahanada aşgazan-içege, bagyr, öt çykaryş ýollarynyň, daýanç-hereket synalarynyň, periferiki nerw ulgamlarynyň, deri we ginekologiki keseller bejerilýär. <br /><br /> Esasan-da gyzylödegiň dowamly gaýnaglamasy, dowamly aşgazan keselleri (gastritler), öt haltanyň we öt ýollarynyň keselleri, olaryň diskineziýalary, gepatitler, kolitler, enterekolitler, babasiliň daşky we içki görnüşleri, aşgazanyň we on iki barmak içegäniň başly ýarasy ýiti däl döwri, ýüregiň işjeňliginiň bozulmagy (ýürek newrozlary), öte geçmedik ateroskleroz keseli, birinji derejeli gipertoniýa (ýüregiň we beýni ganaýlanyşynyň bozulmalarynyň alamatlary ýok bolan ýagdaýynda), döreýşi dürli bolan (inçekeselden başgasy) dowamly guragyrylar. <br /><br /> Bogunlaryň keselleri (çişi bolmadyk wagtynda), madda alyş-çalşygynyň bozulmagy zerarly dörän oňurga we bogunagyrylary (artritler), oňurgalara we bogunlara duz ýygnanma keseli (osteoartroz), gaýtalap duran çakyza, kükrek we oňurgalaryň radikulidi, nerw ulgamynyň dowamly gaýnaglamasy, semizligiň ýeňil we orta derejesi, klimaks zerarly döreýän näsazlyklar, neýrodermit, dowamly iteşen, gyzylendigan demrew, psoreaz, parapsoreaz, ýatgy we onuň ösüntgileriniň dowamly keselleri, aýbaşynyň bozulmalary bejerilýär.
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="row mt-5 pt-3">
                            <div className="col-lg-12 col-md-8">
                                <form id="order-form">
                                    <div className="row">

                                        <div className="col-sm-12 mb-4">
                                            <div className="form-group">
                                                <label className="fw-bold text-dark mb-2" style={{ letterSpacing: "0.7px" }}>
                                                    Telefon belgiňiz
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text rounded-0">+993</span>
                                                    </div>
                                                    <input type="number" min="60000000" max="65999999" className="form-control" autoComplete='off' name="phoneNumber" required onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-12'>
                                            <div className="row justify-content-between mb-3">
                                                <div className='col-lg-6'>
                                                    <label className="fw-bold text-dark mb-2" style={{ letterSpacing: "0.7px" }}>
                                                        Giriş wagty
                                                    </label>
                                                    <DatePicker className="form-control rounded-0" name='checkIn' selected={startDate} onChange={(date) => setStartDate(date)} />
                                                </div>
                                                <div className='col-lg-6'>
                                                    <label className="fw-bold text-dark mb-2" style={{ letterSpacing: "0.7px" }}>
                                                        Çykyş wagty
                                                    </label>
                                                    <DatePicker className="form-control rounded-0" name='checkOut' selected={endDate} onChange={(date) => setEndDate(date)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 mt-3">
                                            <div className="form-group">
                                                <label className="fw-bold text-dark mb-2" style={{ letterSpacing: "0.7px" }}>
                                                    Bellikleriňiz
                                                </label>
                                                <textarea name="mark" className="form-control rounded-0" rows="5" onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-4 mt-4">
                            {
                                !authState.status
                                    ?
                                    <div className='d-grid'>
                                        <Link to="/login" className="btn btn-lg btn-green btn-block text-white fw-bold">
                                            Bronlamak
                                        </Link>
                                    </div>
                                    :
                                    <div className='d-grid'>
                                        <button onClick={bookingRoom} type="submit" className="btn btn-lg btn-primary btn-block text-white fw-bold" id="buy-now">
                                            Bronlamak
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomRead