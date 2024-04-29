import { Link } from 'react-router-dom'
import pdftotext from '../icons/pdftoimg.png'
import upload from '../icons/upload.png'
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';
import { useState } from 'react';


export default function Tools() {

    return (
        <>
            <section className="tools">
                <h3>TOOLS</h3>
                <div className="toolrow">
                    <Link to='pdftotext'>
                        <div className="tool">
                            <h3>IMAGE - to - TEXT</h3>
                            <img src={pdftotext} style={{width:'100%'}} alt="" />

                        </div>
                    </Link>
                </div>
            </section>

        </>
    )
}

export function Pdftotext() {
    const [isDragged, setDragged] = useState(false)
    const [load, setLoad] = useState(false)
    const [text, setText] = useState('')

    const handleCopy =(event)=>{
        if(navigator.clipboard){
            navigator.clipboard.writeText(text)
        }
        event.target.innerText='COPIED';
        setTimeout(()=>{event.target.innerText="COPY"},3000)
    }

    const tryAgain = () => {
        setDragged(false)
        setText('')
    }
    const handleChange = (event) => {
        const files = event.target.files;
        // Pass the selected files to the onFileUpload function
        onFileUpload(files);
    };

    const onDrop = (acceptedFiles) => {
        // Do something with the accepted files
        setDragged(true)
        setLoad(true)
        onFileUpload(acceptedFiles);
    };
    const onFileUpload = async (files) => {
        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const { data: { text } } = await Tesseract.recognize(file, 'eng');
                setLoad(false)
                setText(text)
                console.log('Text from image:', text);
            } else if (file.type === 'application/pdf') {
            } else {
                console.log('Unsupported file type:', file.type);
            }
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <>
            <section className="tools" >
                <h3>IMAGE TEXT EXTRACTOR</h3>
                <div className="toolrow">
                    {
                        isDragged ? (
                            <>
                                {
                                    load ? (

                                        <>
                                            <div className='loader'>
                                            </div>

                                        </>
                                    ) :
                                        (
                                            <>
                                                <div className='extractedtext' style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <span><button onClick={handleCopy}>🗄 COPY</button></span>
                                                    <pre>
                                                        {text}
                                                    </pre>

                                                    <button onClick={tryAgain} className='btn button' style={{ display: 'inline-block' }}>Try again</button>
                                                </div>
                                            </>
                                        )
                                }
                            </>
                        ) :
                            (
                                <>

                                    <div className="Dropfile" style={isDragActive ? { scale: '1.1' } : { scale: '1' }} {...getRootProps()}>
                                        <img src={upload} alt="" />
                                        <input onChange={handleChange} {...getInputProps()} />

                                    </div>
                                </>
                            )
                    }
                </div>
            </section>
        </>
    )
}