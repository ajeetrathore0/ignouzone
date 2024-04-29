import logo from '../icons/logo2.png'
import bell from '../icons/bell.png'
import messageicon from '../icons/message.png'
import menubar from '../icons/menu.png'
import { Searchbar } from './home'



import { Link } from 'react-router-dom'
import { useState } from 'react'




function Topmenu() {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        if (document.body.classList.contains('toggle')) {
            document.body.classList.remove('toggle')
        }
        else {
            document.body.classList.add('toggle')
        }

    }
    return (
        <>
            <section id="topmenu">
                <div className="topmenu">

                    <div className="menubar" onClick={handleClick}>
                        <img src={menubar} alt="menubar" />
                    </div>
                    <div className="mainlogo">
                        <Link to='/'>
                        <img src={logo} alt="logo" />
                        </Link>
                    </div>

                </div>
                <Searchbar />
                <div className='notification'>
                    <Link to='/message'>
                        <img src={messageicon} alt="" style={{ transform: "scale(1.1)" }} />
                    </Link>
                    <Link to='/notification'>
                        <img src={bell} alt="" />
                    </Link>
                </div>

            </section>
            
        </>
    )
}

export function Search(){
    return (
        <>

        <div className="seracharea" >
            <div id="search">
                <input type="search" name="search" id="searchinput " placeholder='Search for Ignou assignments,Notes, ignou..' />
                <button>Search</button>
            </div>
            <div id="searchreasult"></div>

        </div>
        
        </>
    )
}

export default Topmenu;