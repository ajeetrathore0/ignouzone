import usericon from '../icons/profile.png'
import { Link } from 'react-router-dom'
const Profile=()=>{


    return(
        <>
            <section id="profile">
                <div className="information">
                    <div className="pic">
                        <img src={usericon} alt="" />
                    </div>
                    <div className="info">
                        <h2>Name</h2>
                        <p>enrollment</p>
                        <i>Programe</i>
                    </div>
                </div>
                <div className="links">
                    <Link to='acadimic'>Acadmic</Link>
                    <Link to='basic'>Basic</Link>
                    <Link to='other'>Other</Link>
                </div>
            </section>

        
        </>
    )
}

export default Profile