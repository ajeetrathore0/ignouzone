
import { Link, useParams } from 'react-router-dom'
import file from '../icons/file.png'
import duplicate from '../icons/duplicate.png'
import { useState, useEffect } from 'react'
import axios from 'axios';
import FileSaver from 'file-saver';

const Solveassignment = () => {
    let prg
    const [chooseOne, setChooseOne] = useState(true)
    const [cp, scp] = useState([])
    const [assignmentData, setAssignmentData] = useState(
        {
            program: "",
            sem: ""
        }
    )

    const [program, setProgram] = useState(false)
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


    return (
        <>
            <section id="assignment">
                <span id="asignmentheading"><i>📂</i><h3>Solve Assignments</h3></span>
                <div className="assignment">
                    {chooseOne ? (
                        <>

                            <div className="freeandpaid">
                                <span>
                                    FREE
                                </span>
                                <span>
                                    PAID
                                </span>
                            </div>
                            <div className="assignmentarea">
                                <div className="program">
                                    <span className="tag">
                                        BCA/MCA
                                    </span>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span>
                                            <h4>BCA / MCA</h4>
                                            <p>All Semester assignment</p>
                                        </span>
                                        <span>
                                            <button onClick={handleChooseOne}>Select</button>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="program">
                                    <span className="tag">
                                        BA/MA
                                    </span>
                                    <div>
                                        <span>
                                            <h4>BA / MA / B.com</h4>
                                            <p>All Semester assignment</p>
                                        </span>
                                        <span>
                                            <button onClick={handleChooseOne}>Select</button>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="program">
                                    <span className="tag">
                                        Bsc
                                    </span>
                                    <div>
                                        <span style={{ width: "80%" }}>
                                            <h4>Bsc</h4>
                                            <p>All Semester assignment</p>
                                        </span>
                                        <span>
                                            <button onClick={handleChooseOne}>Select</button>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="program">
                                    <div className="videolist" style={{ background: "transparent", width: "100%" }}>


                                        <button>Explore More →</button>
                                    </div>
                                </div>

                            </div>
                        </>
                    ) : (
                        <></>
                    )

                    }

                    {
                        program ? (<div className="assignmentarea">{cp.map((item, index) => (
                            <>
                                <div className="program" >
                                    <li key={index} style={{ display: "none" }}></li>
                                    <span className="tag">
                                        {item}
                                    </span>
                                    <div>
                                        <span style={{ width: "80%" }}>
                                            <h4>{item}</h4>
                                            <p>All solve assignment</p>
                                        </span>
                                        <span>
                                            <button onClick={handleChooseProgram}>Select</button>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                            </>
                        ))}</div>) : (
                            <></>
                        )
                    }
                    {
                        sem ? (
                            <>
                                <div className="assignmentquestion">
                                    {/* <h3>{prg}</h3> */}
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 1 </span>
                                        <span><Link to={pg + "_sem1"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 2 </span>
                                        <span><Link to={pg + "_sem2"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 3 </span>
                                        <span><Link to={pg + "_sem3"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 4 </span>
                                        <span><Link to={pg + "_sem4"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 5 </span>
                                        <span><Link to={pg + "_sem5"} > <button>Download →</button></Link></span>
                                    </div>
                                    <div className="type">
                                        <span>{pg}</span>
                                        <span>Semester 6</span>
                                        <span><Link to={pg + "_sem6"} > <button>Download →</button></Link></span>
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


const Assignmentquestion = () => {
    return (
        <>
            <section id="assignmentquestion">
                <span><img src={file} />Assignment Question Paper</span>
                <div className="assignmentquestion">

                    <div className="type">
                        <span>MD</span>
                        <span>Master's degree </span>
                        <span><a href="https://webservices.ignou.ac.in/assignments/Master-Degree/Master.htm" target='blank'> <button>Download →</button></a></span>
                    </div>
                    <div className="type">
                        <span>BD</span>
                        <span>Batchlor's degree </span>
                        <span><a href="https://webservices.ignou.ac.in/assignments/Bachelor-Degree/Bachelor.htm" target='blank'> <button>Download →</button></a></span>
                    </div>

                </div>
            </section>
        </>
    )
}



const downloadBase64File = (base64Data, fileName) => {
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);


    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    let a = FileSaver.saveAs(blob, fileName);

    return true
};



const downloadfiles = (base64Data, fileName) => {
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,${base64Data}`;
    link.download = fileName;
    link.click();
};




export function Checkurl() {

    const [loader, setLoader] = useState(false)

    const { id } = useParams()
    let prg = id.split("_")
    let semesters = prg[1]
    let i = 'semester' + semesters[semesters.length - 1]
    const url = "https://killdeer-precise-zebra.ngrok-free.app/assets/getassignment"
    // const url = "https://jdmrealestate.pythonanywhere.com/assets/getassignment"
    const [data, setData] = useState(null);

    const bytetomb = (bytes) => {
        return (bytes / (1024 * 1024)).toFixed(2)
    }

    const downloadAssignment = (id) => {
        let requestData = {
            uuid: id,
            type: "pdf"
        }
        setLoader(true)
        axios.post(url, requestData)
            .then(response => {
                const res = response.data; // Assuming the response contains base64 data
                response.request.onload = (e) => {
                    console.log(e)
                }
                const fileName = res.name + '.pdf'; // Replace with your desired file name
                let check = downloadBase64File(res.file, fileName);
                console.log(check)

                if (check) {
                    setLoader(false)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });



    }

    useEffect(() => {
        async function fetchData() {
            try {
                const requestData = { program: prg[0].toLowerCase(), semester: i, type: "pdfdata" }; // Replace with your data
                const response = await axios.post(url, requestData);
                setData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    if (data === null) {
        return <div style={{ display: "flex", color: "white", justifyContent: "center" }}>Loading...</div>;
    }

    return (
        <>
            <section id="solveassignmentsfiles">
                {
                    loader ? (
                        <>
                            <div className="loaders">
                                <span></span>
                                <p>Downloading...</p>

                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
                <h3>{prg[0]} {'semester ' + semesters[semesters.length - 1]} all Solve Assignments</h3>
                <div className="solveassignmentsfiles">

                    {

                        data.assignments.map((elem, ind) => (
                            (

                                <>
                                    <div className="book">
                                        <span><img className='bookimg' src={'data:image/webp;base64,' + elem.img} alt={elem['course code']} /></span>
                                        <span>
                                            <h3>
                                                {elem['course code']}
                                            </h3>
                                            <p><i>Size :</i> &nbsp; <b>{bytetomb(elem.size)} MB</b> </p>
                                            <Link to={elem.uuid} >Download</Link>
                                        </span>
                                    </div>
                                </>
                            )
                        ))
                    }

                </div>
            </section>
        </>
    )
}


const Assignment = () => {

    useEffect(() => {
        document.title = "Assignments"
    }, [])
    return (
        <>
            <Solveassignment />
            <Assignmentquestion />
        </>
    )
}


export default Assignment;