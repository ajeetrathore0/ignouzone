import { Link } from "react-router-dom"

const Services=()=>{
    return (
        <>
        <Link to='gradecard' className="services">Gradecard</Link>
        <Link to='assignmentstatus' className="services">Assignment Status</Link>
        </>
    )
}

export default Services