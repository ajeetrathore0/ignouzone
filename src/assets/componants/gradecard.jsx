import React, { useState } from 'react';
import axios from 'axios';
import ignouzone from '../icons/logo.png'
import ignou from '../icons/ignou.png'

const Gradecard = () => {
  const [program, setProgram] = useState('');
  const [enrollmentno, setEnrollmentno] = useState('');
  const [datas, setDatas] = useState('');
  const [showgradecard, setshowgradecard] = useState(false);
  const [gradecard, setGradecard] = useState({
    name: "",
    enrollmentno: "",
    program: "",
    gradecard: {
      theory: [],
      practical: [],
      incompleted: []
    },
    total: {},
  })

  const checkGrade = async (e) => {
    e.preventDefault();
    const url = "http://54.198.217.81:8000/gradecard"
    // Set the data state inside the event handler
    const data = {
      "program": program,
      "enrollmentno": enrollmentno,
      "type": "1"
    };

    try {


      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setDatas(result);

      let str = result['html'].replace(/[\n\r]/g, ' ');


      var parser = new DOMParser();
      var doc = parser.parseFromString(str, 'text/html');

      var tables = doc.getElementsByTagName('table');

      let allresult = []
      let currentResult = []
      let resultpart;

      for (var i = 0; i < tables.length; i++) {
        var table = tables[i];

        var rows = table.getElementsByTagName('tr');

        for (var j = 0; j < rows.length; j++) {
          var row = rows[j];

          var cells = row.getElementsByTagName('td');
          if (i == 1 && j === 6) {
            resultpart = 1
          }

          for (var k = 0; k < cells.length; k++) {
            var cell = cells[k];
            if (i == 1 && j == 4) {
              if (k == 3) {
                gradecard.enrollmentno = cell.innerText;
              }
              else if (k == 4) {
                gradecard.name = cell.innerText
              }
              else if (k == 7) {
                gradecard.program = cell.innerText
              }
            }
            else if (i == 1 && j == 6) {
              if (k > 0) {
                if (resultpart < 9) {
                  resultpart += 1
                  currentResult.push(cell.innerText)
                }
                else {
                  currentResult.push(cell.innerText)
                  resultpart = 1
                  allresult.push(currentResult)
                  currentResult = []
                }



              }

            }
          }
        }
      }

      allresult.forEach(i => {
        if (i[7] == "-" && i[6] != "-") {
          let arr = [i[0], i[1], i[6], i[8]]
          gradecard.gradecard.theory.push(arr)
        }
        else if (i[6] == "-" && i[7] != "-") {
          let arr = [i[0], i[1], i[7], i[8]]
          gradecard.gradecard.practical.push(arr)

        }
        else {
          // let arr =[i[0],i[1],i[7],i[8]]
          gradecard.gradecard.incompleted.push(i)
        }
      })

      console.log(gradecard)
      setshowgradecard(true)
    } catch (error) {
      console.log(error)
    } finally {

    }


  };



  return (
    <>    <div>
      <form method='post' className='gradeform'>
        <label htmlFor="program">
          <select name="program" id="" onChange={(e) => { setProgram(e.target.value) }}>
            <option value="">Select Program</option>
            <option value="BCA">Bca</option>
            <option value="MCA">Mca</option>
          </select>
        </label>
        <label htmlFor="enrollmentno">
          <input type="text" name="enrollmentno" onChange={(e) => { setEnrollmentno(e.target.value) }} placeholder='Enrollment No.' />
        </label>
        <label htmlFor="submit">
          <input type="submit" value="Check Grade" onClick={checkGrade} />
        </label>
      </form>
    </div>

      {
        showgradecard ? (<>

          <section className="marksheet">
            <div className="fullmarksheet">
              <div className="upersidearea">
                <img src={ignou} alt="" className="ignoulogo" />
                <span className="slogan">
                  <h1>indira gandhi national open university</h1>
                  <span>Gradecard</span>
                  <b>Ignou</b>
                </span>
                <img src={ignouzone} style={{ transform: "scale(1)", marginLeft: "10px", background: "#9a9abf", borderRadius: "50%" }} alt="" className="ignouzone" />
              </div>

              <div className="personalinfo">
                <div className="nameandenroll">
                  <span className="name">
                    <b>Name :</b> <p>Ajeet</p>
                  </span>
                  <span className="enrollment">
                    <b>Enrollment No. :</b> <p>2200....</p>
                  </span>
                </div>
                <div className="program">
                  <span className="prg">
                    <b>Program :</b> <p>Bca</p>
                  </span>

                </div>
              </div>

              <div className="marks">


                <div className="heading">
                  <span className="title">
                    Exam Type
                  </span>
                  <span className="numbers">
                    <span>
                      <p>Code</p>
                      <p>Assignment no.</p>
                      <p>marks</p>
                      <p>Status</p>
                    </span>

                  </span>

                </div>
                <div className="heading">
                  <span className="title">
                    Theory Exam
                  </span>
                  <span className="numbers">


                    {true && (
                      gradecard.gradecard.theory.map((item, index) => (
                        <span>
                          <p>{item[0]}</p>
                          <p>{item[1]}</p>
                          <p>{item[2]}</p>
                          {
                            item[3] === "COMPLETED" && (
                              <>
                                <p className='success'>Pass</p>
                              </>
                            )
                          }
                          {
                            item[3] === "NOT COMPLETED" && (
                              <>
                                <p className='unsuccess'>Fail</p>
                              </>
                            )
                          }


                        </span>
                      ))

                    )}

                  </span>

                </div>
                <div className="heading">
                  <span className="title">
                    Practical Exam
                  </span>
                  <span className="numbers">


                    {true && (
                      gradecard.gradecard.practical.map((item, index) => (
                        <span>
                          <p>{item[0]}</p>
                          <p>{item[1]}</p>
                          <p>{item[2]}</p>
                          {
                            item[3] === "COMPLETED" && (
                              <>
                                <p className='success'>Pass</p>
                              </>
                            )
                          }
                          {
                            item[3] === "NOT COMPLETED" && (
                              <>
                                <p className='unsuccess'>Fail</p>
                              </>
                            )
                          }


                        </span>
                      ))

                    )}

                  </span>

                </div>
                <div className="heading">
                  <span className="title">
                    Incompleted Exam
                  </span>
                  <span className="numbers">


                    {true && (
                      gradecard.gradecard.incompleted.map((item, index) => (
                        <span>
                          <p>{item[0]}</p>
                          <p>{item[1]}</p>
                          <p>{item[2]}</p>
                          {
                            item[3] === "-" && (
                              <>
                                <p>Incompleted</p>
                              </>
                            )
                          }
                          


                        </span>
                      ))

                    )}

                  </span>

                </div>




              </div>

            </div>
          </section>
        </>) : (<></>)
      }

      <p style={{padding:"20px"}}>NOTE : this result is fetched from ignou api url our site is note save your personal data and result</p>
    </>

  );
};

export default Gradecard;
