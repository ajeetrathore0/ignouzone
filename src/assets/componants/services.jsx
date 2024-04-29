import { Link } from "react-router-dom"

const Services=()=>{
    return (
        <>
        <div id="allservices">

        <Link to='gradecard' className="services"><b>IGNOU Gradecard</b> <p>click</p></Link>
        <Link to='assignmentstatus' className="services"><b>Assignment Status</b> <p>click</p></Link>
    
        </div>
        </>
    )
}





export default Services