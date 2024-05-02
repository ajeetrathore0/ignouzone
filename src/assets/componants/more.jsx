
import notes from '../icons/edit.png'
import ass from '../icons/ballot.png'
import update from '../icons/refresh.png'
import book from '../icons/book.png'
import partner from '../icons/handshake.png'
import rupee from '../icons/rupee.png'
import service from '../icons/services.png'
import support from '../icons/telephone.png'
import setting from '../icons/settings.png'
import toolsicon from '../icons/tools.png'
import home from '../icons/home.png'
import { useEffect } from 'react'

import { Link, link } from 'react-router-dom'
import { toContainHTML } from '@testing-library/jest-dom/matchers'


function More() {

    useEffect(() => {
        const liElements = document.querySelectorAll('li');

        liElements.forEach(li => {
            if (!li.onclick) {
                li.addEventListener('click', handleClick);
            }
        });

        return () => {
            liElements.forEach(li => {
                if (!li.onclick) {
                    li.removeEventListener('click', handleClick);
                }
            });
        };
    }, []);
    const handleClick = (event) => {
        // Logic to handle click event
        document.body.classList.remove('toggle')
    };

    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };
    return (
        <>
            <section id="more">
                <div className="menulist">
                    {/* <h3 className='goback' onClick={handleGoBack}>←</h3> */}
                    <ul id='menulistul'>
                        <li>

                            <Link to='/'>
                                <span>
                                    <img src={home} alt="" />
                                    <p>Home</p>
                                </span>
                            </Link>
                        </li>
                        <li>

                            <Link to='assignment'>
                                <span>
                                    <img src={ass} alt="" />
                                    <p>Assignment</p>
                                </span>
                            </Link>
                        </li>
                        <li>

                            <Link to='Notes'>
                                <span>
                                    <img src={notes} alt="" />
                                    <p>Notes</p>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='books'>
                                <span>
                                    <img src={book} alt="" />
                                    <p>Books</p>
                                </span>
                            </Link>
                        </li>
                  
                        <li>
                            <span>
                                <img src={update} alt="" />
                                <p>Ignou Updates</p>
                            </span>
                        </li>
                        <li>
                            <Link to='/tools'>
                            <span>
                                <img src={toolsicon} alt="" />
                                <p>Tools</p>
                            </span>
                            </Link>
                        </li>
                   
                        <li>
                            <Link to='setting'>
                                <span>
                                    <img src={setting} alt="" />
                                    <p>Setting</p>
                                </span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default More;