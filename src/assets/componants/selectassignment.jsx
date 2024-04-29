
import { Link, useParams } from 'react-router-dom'
import file from '../icons/file.png'
import duplicate from '../icons/duplicate.png'
import { useState, useEffect } from 'react'
import axios from 'axios';
import FileSaver from 'file-saver';
import { programearr } from './arrdata';


const Solveassignment = () => {
    let prg, prgarr
    const [chooseOne, setChooseOne] = useState(true)
    const [cp, scp] = useState(programearr)
    const [assignmentData, setAssignmentData] = useState(
        {
            program: "",
            sem: ""
        }
    )


    const [program, setProgram] = useState(true)
    const [sem, setSem] = useState(false)
    const [pg, setPg] = useState("")

    const handleChooseOne = (event) => {
        let text = event.target.parentNode.previousSibling.firstElementChild.textContent
        let arr = text.split('/')
        scp(arr)
        setChooseOne(false)
        setProgram(true)
    }
    const handleChooseProgram = (event) => {
        prg = event.target.parentNode.previousSibling.firstElementChild.textContent;
        setProgram(false)
        setSem(true)
        setPg(prg)

    }
    const searcprogram = (event) => {
        let a = event.target.value;
        a = a.toLowerCase()
        let c = []
        programearr.forEach(elem => {
            let b = []
            elem.forEach(el => {
                if (el.toLowerCase().includes(a)) {
                    b.push(el)
                }
            })
            c.push(b)

        })

        scp(c.sort())
    }


    return (
        <>
            <section id="assignment">
                <span id="asignmentheading"><i>📂</i><h3>Solve Assignments</h3></span>
                <div className="assignment">
                    <div className="assignmentarea">

                        <div className="freeandpaid">
                            <span>
                                FREE
                            </span>
                            <span>
                                PAID
                            </span>
                        </div>

                        <input type="text" name="search" onChange={searcprogram} id="programsearch" placeholder='Search Program' />
                        {

                            program ? cp.map(elem => elem.map((el, index) => (
                                <>
                                    <div className="program" >
                                        <li key={index} style={{ display: "none" }}></li>
                                        <span className="tag">
                                            {el}
                                        </span>
                                        <div>
                                            <span style={{ width: "80%" }}>
                                                <h4>{el}</h4>
                                                <p>All solve assignment</p>
                                            </span>
                                            <span>
                                                <button onClick={handleChooseProgram}>Select</button>
                                            </span>
                                        </div>
                                    </div>
                                    <hr />

                                </>
                            ))) : (<></>)
                        }
                    </div>

                    {
                        sem ? (
                            <>
                                <div className="assignmentquestion">
                                    {/* <h3>{prg}</h3> */}
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 1 </span>
                                        <span><Link to={'/assignment/' + pg + "_sem1"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 2 </span>
                                        <span><Link to={'/assignment/' + pg + "_sem2"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 3 </span>
                                        <span><Link to={'/assignment/' + pg + "_sem3"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 4 </span>
                                        <span><Link to={'/assignment/' + pg + "_sem4"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 5 </span>
                                        <span><Link to={'/assignment/' + pg + "_sem5"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 6</span>
                                        <span><Link to={'/assignment/' + pg + "_sem6"} > <button>Download →</button></Link></span>
                                    </div>

                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </section >
        </>
    )
}

export default Solveassignment;