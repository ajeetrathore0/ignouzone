import logo from '../icons/logo2.png'
import bell from '../icons/bell.png'

import { Link } from 'react-router-dom'


function Topmenu() {

    return (
        <>
            <section id="topmenu">
                <div className="topmenu">
                    <div className="mainlogo">
                        <img src={logo} alt="logo" />
                    </div>

                </div>
                <div className='notification'>
                    <Link to='/notification'>
                        <img src={bell} alt="" />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Topmenu;