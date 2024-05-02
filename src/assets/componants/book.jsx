import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export function Book() {
    return (
        <>
            <section id="chooseassignment">
                <div className="assignment">
                    <Link to="add">
                        <div className="chooseone"><p className="icon">+</p> ADD BOOK</div>
                    </Link>
                    <Link to="view">
                        <div className="chooseone"><p className="icon">👁‍🗨</p> VIEW BOOKS</div>
                    </Link>

                </div>
            </section>
        </>
    )
}


export function Savebook() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [saveassignment, setUploadProgress] = useState(0);
    const [uploadMessage, setUploadMessage] = useState('');
    const [bookType, setBooktype] = useState('link');
    const [program, setProgram] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const handleFileChange = (event) => {
        if(event.target.type === 'file'){
            setSelectedFile(event.target.files[0]);
        }
        else{
            setBooktype(event.target.value);
        }
    };

    const uploadFile = () => {
        setLoading(true);
        setUploadProgress(0);
        if (!selectedFile&&bookType=='pdf') {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('pdf', selectedFile);
        formData.append('booktype', bookType);
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
                            <h2>Book details</h2>

                            
                            <div className="row">
                            <label htmlFor="program">
                                <input type="text" id="program" placeholder="PROGRAM" onChange={(e) => setProgram(e.target.value)} />
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
                            <h2>File </h2>
                            <label htmlFor="bookstype">
                                <select name="bookstype" id="bookstype" className='input' onChange={(e) => setBooktype(e.target.value)}>
                                    <option value="link">Hard Copy</option>
                                    <option value="pdf">Pdf</option>
                                </select>
                            </label>
                            <div className="file">
                                {
                                    bookType === 'pdf' ? (
                                        <label htmlFor="file">
                                            <input type="file" accept='.pdf' id="file" onChange={handleFileChange} />
                                        </label>

                                    ) : (
                                        <label htmlFor="file">
                                            <input type="text" id="file" onChange={handleFileChange} placeholder='Enter Link'/>
                                        </label>
                                    )
                                }

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
