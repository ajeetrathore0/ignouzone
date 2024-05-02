
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useHistory } from 'react-router-dom';

const Assignment = () => {
    return (
        <>
            <section id="chooseassignment">
                <div className="assignment">
                    <Link to="free">
                        <div className="chooseone">FREE ASSIGNMENT</div>
                    </Link>
                    <Link to="paid">
                        <div className="chooseone">PAID ASSIGNMENT</div>
                    </Link>

                </div>
            </section>
        </>
    )
}
export function Assignmentaction() {
    return (
        <>
            <section id="chooseassignment">
                <div className="assignment">
                    <Link to="add">
                        <div className="chooseone"><p className="icon">+</p> ADD NEW ASSIGNMENT</div>
                    </Link>
                    <Link to="view">
                        <div className="chooseone"><p className="icon">👁</p> VIEW ASSIGNMENTS</div>
                    </Link>

                </div>
            </section>
        </>
    )
}


export function Assignmentadd() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [saveassignment, setUploadProgress] = useState(0);
    const [uploadMessage, setUploadMessage] = useState('');
    const [semester, setSemester] = useState('');
    const [program, setProgram] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadFile = () => {
        setLoading(true);
        setUploadProgress(0);
        if (!selectedFile) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('pdf', selectedFile);
        formData.append('semester', semester);
        formData.append('program', program);
        formData.append('course_code', code);

        axios.post('https://killdeer-precise-zebra.ngrok-free.app/assets/saveassignment', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setUploadProgress(progress);
                console.log(progress);
            }

        })
            .then(response => {
                setUploadMessage(response.data.message);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <>
            <section id="chooseassignment">
                <div className="assignment">
                    <div className="info">
                        <div className="programinfo">
                            <h2>Assignment details</h2>

                            <label htmlFor="program">
                                <input type="text" id="program" placeholder="PROGRAM" onChange={(e) => setProgram(e.target.value)} />
                            </label>
                            <div className="row">
                                <label htmlFor="semester">
                                    <select name="semester" className='input' id="sem" onChange={(e) => setSemester(e.target.value)}>
                                        <option value="semester" >Choose Semester</option>
                                        <option value="semester1">Semester 1</option>
                                        <option value="semester2">Semester 2</option>
                                        <option value="semester3">Semester 3</option>
                                        <option value="semester4">Semester 4</option>
                                        <option value="semester5">Semester 5</option>
                                        <option value="semester6">Semester 6</option>
                                    </select>
                                </label>
                                <label htmlFor="coursecode">
                                    <select name="coursecode" id="code" className='input' onChange={(e) => setCode(e.target.value)}>
                                        <option value="coursecode">Course Code</option>
                                        <option value="coursecode">Course Code</option>
                                    </select>
                                </label>
                            </div>

                        </div>
                        <div className="programinfo">
                            <h2>Time & Date stamp</h2>

                            <label htmlFor="program">
                                <input type="text" id="program" readOnly value='12/6/2002' placeholder="DATE" />
                            </label>
                            {/* <div className="row">
                                <label htmlFor="year">
                                   <input type="date"  placeholder='Year' />
                                </label>
                                <label htmlFor="coursecode">
                                    <input type="text" placeholder='Month' />
                                </label>
                            </div> */}

                        </div>
                        <div className="programinfo">
                            <h2>File </h2>
                            <div className="file">
                                <label htmlFor="file">
                                    <input type="file" accept='.pdf' id="file" onChange={handleFileChange} />
                                </label>
                            </div>


                        </div>
                        <input type="button" className='btn' value="UPLOAD" onClick={uploadFile} />
                        {
                            loading && <div className="progress">
                                <span style={{ width: saveassignment + '%' }}>
                                    <h2>

                                    {saveassignment}%
                                    </h2>

                                </span>

                            </div>

                        }


                    </div>
                </div>
            </section>
        </>
    )
}

export function Viewassignment() {
    const [program, setProgram] = useState('');
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [assignment, setAssignment] = useState([]);
    const [fr, setFrom] = useState(0);
    const [show, setShow] = useState(false);
    const viewAssignment = () => {
        const data = {
            program: program,
            type:'admin',
            id:fr,
        }
        axios.post('https://killdeer-precise-zebra.ngrok-free.app/assets/getassignment', data, {
            headers: {
                'Content-Type': 'application/json',
            },
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setProgress(progress);
            }

        })
            .then(response => {
                let arr=assignment
                setLoading(false);
                setShow(true);
                response.data.data.map((item) => {
                    arr.push(item);
                })
                setAssignment([...arr]);
                console.log(assignment);
                setFrom(fr+10);
            })
            .catch(error => {
                console.error(error);
            });
        
        
    }
    return (
        <>
            <section id="chooseassignment">
                <div className="info">
                    <div className="viewassignment">
                        <h2>View Assignments</h2> <br />
                        <div className="row" style={{ width: '100%' }}>

                            <label htmlFor="program">
                                <input type="text" id="program"  placeholder="ENTER PROGRAM" onChange={(e) => {setProgram(e.target.value);setAssignment([]);setFrom(0);} }/>
                            </label>
                            <button className='chooseone btn' onClick={viewAssignment}>VIEW</button>
                        </div>
                        <hr />
                        <table>
                            <thead>
                                <tr>
                                    <th>Program</th>
                                    <th>Semester</th>
                                    <th>Course Code</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    show && assignment.map((item, index) => {   
                                        return (
                                            <tr key={index}>
                                                <td>{item.program}</td>
                                                <td>{item.semester}</td>
                                                <td>{item.coursecode}</td>
                                                <td>{item.date}</td>
                                                <th>
                                                    <button className='input' onClick={(e) => {
                                                        setFrom(item.id);
                                                        setProgram(item.program);
                                                        setProgress(0);
                                                        setLoading(true);
                                                        viewAssignment();
                                                    }}>VIEW</button>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                              
                            </tbody>
                            
                                
                        </table>
                        <button className='xbtn' onClick={viewAssignment}>More</button>
                    </div>
                </div>
            </section>
        </>
    )

}



export default Assignment;