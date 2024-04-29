
import { Link, useParams } from 'react-router-dom'
import file from '../icons/file.png'
import filesize from '../icons/filesize.png'
import duplicate from '../icons/duplicate.png'
import { useState, useEffect } from 'react'
import axios from 'axios';
import FileSaver from 'file-saver';




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




export function DownloadAssignment() {

    const [loader, setLoader] = useState(false)
    const [img, setImg] = useState({img:""})

    const { id } = useParams()
    let prg = id.split("_")
    // let semesters = prg[1]
    // let i = 'semester' + semesters[semesters.length - 1]
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
                let dt={
                    data:{},
                    img:null
                }
                const requestData = {  uuid: id, type: "downloadpdfdata", subtype:"getdetails" }; // Replace with your data
                const response = await axios.post(url, requestData);
                dt.data=response.data;
                setData(dt);

                if(response.status==200){
                    requestData.subtype='getimage'
                    const res = await axios.post(url, requestData);
                    setImg(res.data)
                }
                

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    if (data === null) {
        return <div style={{ display: "flex", color: "white", justifyContent: "center" }}>Loading...</div>;
    }
    const elem=data.data.data;

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
                {/* <h3>{prg[0]} {'semester ' + semesters[semesters.length - 1]} all Solve Assignments</h3> */}
                <div className="solveassignmentsfiles" id='assignmentimg'>

                   
                                    <div className="book">
                                        <span><img className='bookimg' id='assignmentimg'
                                        src={'data:image/webp;base64,' + img.img}
                                         alt='' /></span>
                                        <span>
                                            <h3>
                                                {elem['course code']}
                                            </h3>
                                            <h4>Program : <i> {elem['program']}</i></h4>
                                            <h4>Semester : <i>{elem['semester']}</i> </h4>
                                            <p><img src={filesize} alt="" /><i> Size :</i> &nbsp; <b>{bytetomb(elem.size)} MB</b> </p>
                                            <a href={elem.uuid}  onClick={(e) => {e.preventDefault(); let a = String(elem.uuid); downloadAssignment(a) }}>Download</a>
                                        </span>
                                    </div>
                              
                </div>
            </section>
        </>
    )
}


