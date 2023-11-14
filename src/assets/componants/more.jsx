
import notes from '../icons/edit.png'
import update from '../icons/refresh.png'
import book from '../icons/book.png'
import partner from '../icons/handshake.png'
import rupee from '../icons/rupee.png'
import service from '../icons/services.png'
import support from '../icons/telephone.png'
import setting from '../icons/settings.png'
import lang from '../icons/language.png'
import {Link } from 'react-router-dom'


function More(){

    const handleGoBack = () => {
      window.history.back(); // Navigate to the previous page
    };
    return (
        <>
        <section id="more">
            <div className="menulist">
            <h3 className='goback' onClick={handleGoBack}>←</h3>
                <ul>
                    <li>
                        <span>
                            <img src={notes} alt="" />
                            <p>Notes</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={book} alt="" />
                            <p>Books</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={service} alt="" />
                            <p>Services</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={update} alt="" />
                            <p>Ignou Updates</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={partner} alt="" />
                            <p>Become Partner</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={rupee} alt="" />
                            <p>Refer & Earn</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={setting} alt="" />
                            <p>Setting</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={lang} alt="" />
                            <p>Language</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={support} alt="" />
                            <p>Support</p>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default More;