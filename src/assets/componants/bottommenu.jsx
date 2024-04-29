import React from "react";
import home from '../icons/home.png'
import assignment from '../icons/ballot.png'
import pyp from '../icons/file.png'
import profile from '../icons/profile.png'
import { Link } from 'react-router-dom'



function Bottommenu() {

    return (

        <>
            <section id="bottommenu">
                <div className="bottommenu">
                    {/* <div className="bmpart"></div> */}
                    <div className="bmpart">
                        <ul id="bottommenuul">
                                <li className="1">
                            <Link to='/'>
                                    <span>
                                        <img src={home} alt="home" />
                                        <p>Home</p>
                                    </span>
                            </Link>
                                </li>
                                <li className="2">
                            <Link to='assignment'>
                                    <span>
                                        <img src={assignment} alt="assignment" />
                                        <p>Assignments</p>
                                    </span>
                            </Link>
                                </li>
                                <li className="3">
                            <Link to='previousyearpaper'>
                                    <span>
                                        <img src={pyp} alt="pyp" />
                                        <p>Previous Paper</p>
                                    </span>
                            </Link>
                                </li>
                                <li className="4">
                            <Link to='/profile'>
                                    <span>
                                        <img src={profile} alt="more" />
                                        <p>Profile</p>
                                    </span>
                            </Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bottommenu