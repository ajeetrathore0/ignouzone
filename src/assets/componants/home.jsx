import React, { useState, useEffect } from 'react';
import search from '../icons/search.png'
import '../style/slider.css'
import { Link } from 'react-router-dom'
import notes from '../icons/edit.png'
import update from '../icons/bell.png'
import book from '../icons/book.png'
import partner from '../icons/handshake.png'
import rupee from '../icons/rupee.png'
import service from '../icons/services.png'
import support from '../icons/telephone.png'
import setting from '../icons/settings.png'
import lang from '../icons/language.png'
import assignment from '../icons/ballot.png'
import file from '../icons/file.png'
import quiz from '../icons/quiz.png'
import video from '../icons/play.png'
import services from '../icons/services.png'
import duplicate from '../icons/duplicate.png'
import logo from '../icons/logo.png'
import free from '../icons/free.png'
import bca from '../images/BCA.jpg'
import ba from '../images/BA.jpg'
import bsc from '../images/bsc.jpg'
import mba from '../images/mba.jpg'
import bcs_012 from '../images/bcs_012.jpg'
import mcsl_216 from '../images/mca_mcsl_216.jpg'
import mcs_14 from '../images/mcs_14.jpg'
import notespic from '../images/notes.png'
import assignmentp from '../images/assignment.png'
import More from '../componants/more'

export const Searchbar = () => {

    return (
        <>
            <section id='searchbar'>
                <div className="searchbar">
                    <Link to='search'>
                        <img src={search} alt="" />
                        <input id='searchbarbutton' type="button" value="Search assignment, notes, more" />
                    </Link>
                </div>
            </section>
        </>
    )
}

const TopLinks = () => {
    return (
        <>

            <section id="booksell" style={{ background: 'transparent', padding: '0' }}>
                <div className="booksell" id='toplinks' style={{ padding: '10px' }}>
                    <Link to='assignment'>
                        <div className="toplink">2024 Assignments</div>
                    </Link>
                    <Link to='books'>
                        <div className="toplink">Books</div>
                    </Link>

                    <Link>
                        <div className="toplink">Notification</div>
                    </Link>
                    <Link>
                        <div className="toplink">#ignou</div>
                    </Link>
                    <Link>
                        <div className="toplink">Video</div>
                    </Link>
                    <Link>
                        <div className="toplink">Updates</div>
                    </Link>
                    <Link>
                        <div className="toplink">News</div>
                    </Link>

                </div>
            </section>

        </>
    )
}



const Slider = () => {
    const images = [
        notespic,
        assignmentp,
    ];
    const [checkSlide, setCheckSlide] = useState(false)

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-slide every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <>

            <div className="image-slider">
                <img src={images[currentIndex]} alt="Slider" />
                <button onClick={prevSlide} className="slider-button prev-button">
                    ←
                </button>
                <button onClick={nextSlide} className="slider-button next-button">
                    →
                </button>
            </div>
        </>
    );
};


const Options = () => {

    return (
        <>
            <section id="options">
                <div className="options">
                    <div className="line1">
                        <ul>
                            <li>
                                <Link to='/services'>
                                    <span>
                                        <img src={service} alt="" />
                                        <p>Ignou Services</p>

                                    </span>
                                </Link>
                            </li>
                            <li>
                                <span>
                                    <img src={book} alt="" style={{ filter: 'drop-shadow(0px 0px 1px blue)', boxShadow: '0 0 35px blue' }} />
                                    <p>Books</p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={notes} alt="" style={{ filter: 'drop-shadow(0px 0px 1px red)', boxShadow: '0 0 35px red' }} />
                                    <p>Notes</p>
                                </span>
                            </li>

                            <li>
                                <Link to='/previousyearpaper'>
                                    <span>
                                        <img src={file} alt="" style={{ filter: 'drop-shadow(0px 0px 1px green)', boxShadow: '0 0 35px green' }} />
                                        <p>PYP</p>
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="line2">
                        <ul>
                            <li>
                                <span>
                                    <img src={update} alt="" style={{ filter: 'drop-shadow(0px 0px 1px yellow)', boxShadow: '0 0 35px yellow' }} />
                                    <p>Ignou updates</p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={quiz} alt="" />
                                    <p>Quiz</p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={video} alt="" />
                                    <p>V-Source</p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={duplicate} alt="" />
                                    <p>PDF</p>
                                </span>
                            </li>


                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}



const Videosource = () => {

    return (
        <>
            <section id="videosource">

                <div className="videosource">
                    <div className='videosourcelogo'>
                        <img src={video} alt="" />
                        <p>Prepare your exam with us</p>
                        <img src={free} alt="" style={{ filter: 'invert(1)', width: '19px' }} />
                    </div>
                    <div className="videolist">
                        <span>
                            <img src={bca} alt="" />
                        </span>
                        <span>
                            <h3 style={{ fontWeight: "800" }}>BCA Classes</h3>
                            <p >All Semester </p>
                            <i>BCA | MCA</i>

                        </span>
                        <span>
                            <h4>start</h4>
                        </span>
                    </div>
                    <div className="videolist">
                        <span>
                            <img src={ba} alt="" />
                        </span>
                        <span>
                            <h3 style={{ fontWeight: "800" }}>BA / B.com Classes</h3>
                            <p >All Semester </p>
                            <i>BA | B.COM</i>

                        </span>
                        <span>
                            <h4>start</h4>
                        </span>
                    </div>
                    <div className="videolist">
                        <span>
                            <img src={bsc} alt="" />
                        </span>
                        <span>
                            <h3 style={{ fontWeight: "800" }}>Bsc Classes</h3>
                            <p >All Semester </p>
                            <i>B.sc</i>

                        </span>
                        <span>
                            <h4>start</h4>
                        </span>
                    </div>
                    <div className="videolist" style={{ background: "transparent" }}>

                        <button>Explore More</button>

                    </div>
                </div>
            </section>

        </>
    )
}


const Bookshell = () => {
    return (
        <>

            <section id="booksell">
                <span id="ignoubooktitle" ><p ><b style={{ color: "blue" }}>♦</b><font>Ignou Books</font></p><i><button>View all</button></i></span>
                <div className="booksell">
                    <div className="book">
                        <span><img className='bookimg' src={bcs_012} alt="" /></span>
                        <span>
                            <h3>
                                BCS-012
                            </h3>
                            <p><strike>₹. 299</strike> &nbsp; <b>108</b> </p>
                        </span>
                    </div>
                    <div className="book">
                        <span><img className='bookimg' src={mba} alt="" /></span>
                        <span>
                            <h3>
                                MBA All
                            </h3>
                            <p><strike>₹. 499</strike> &nbsp; <b>269</b> </p>
                        </span>
                    </div>
                    <div className="book">
                        <span><img className='bookimg' src={mcsl_216} alt="" /></span>
                        <span>
                            <h3>
                                mcsl-216
                            </h3>
                            <p><strike>₹. 999</strike> &nbsp; <b>700</b> </p>
                        </span>
                    </div>
                    <div className="book">
                        <span><img className='bookimg' src={mcs_14} alt="" /></span>
                        <span>
                            <h3>
                                MCS-014
                            </h3>
                            <p><strike>₹. 459</strike> &nbsp; <b>399</b> </p>
                        </span>
                    </div>

                </div>
            </section>

        </>
    )
}




const Quicklinks = () => {
    return (

        <>

            <section id="quicklinks">
                <div className="quicklinks">

                </div>
            </section>

        </>
    )
}




const PandP = () => {
    return (
        <>
            <section id="privacy">
                <div className="privacy">
                    <span>
                        <h3>Privacy & Policy</h3>
                        <p>
                            We are Providing some facility to ignou student without taking any sensitive information.
                            Our website is selling assingment , books and notes , we are also provide some services using input of enrollment (no.) like gradcard and assignment submision.
                        </p>
                    </span>

                </div>
            </section>
        </>
    )
}


const Home = () => {
    useEffect(() => {
        document.title = "Home || Ignou tech"
    }, [])

    return (
        <>

            {/* <Searchbar /> */}
            <TopLinks />
            <Slider />
            <Options />
            <Videosource />
            <Bookshell />
            <Quicklinks />
            <PandP />
        </>
    )
}
export default Home;
