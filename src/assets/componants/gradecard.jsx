import axios from 'axios';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import React, { useState } from 'react';
import ignou from '../icons/ignou.png';
import ignouzone from '../icons/logo2.png';

const Gradecard = () => {

  const [program, setProgram] = useState('');
  const [load, setLoad] = useState(false);
  const [enrollmentno, setEnrollmentno] = useState('');
  const [datas, setDatas] = useState('');
  const [calcpercentage, setcalcpercentage] = useState('t');
  const [showgradecard, setshowgradecard] = useState(false);
  const [percentage, setpercentage] = useState(null)
  const [cgpa, setcgpa] = useState(null)
  const [gradeCardType, setGradeCardType] = useState('img')
  const [type, setType] = useState(undefined)

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

  document.title = 'gradecard'
  const changecalcpercentage = (e) => {
    setcalcpercentage(e.target.value)

    let perc = 0;
    let cgp = 0;
    let arr = [];
    let arr2 = 0;
    let leng = 0
    let a;


    if (e.target.value == 't') {
      arr.push(gradecard.gradecard.practical)
      arr.push(gradecard.gradecard.theory)
      arr.forEach((elem) => {
        elem.forEach((el) => {
          if (el[el.length - 1] == "COMPLETED") {
            arr2 += Number(el[el.length - 2])
            leng += 1;
          }
        })
      })

      perc = (arr2 / leng).toFixed(1);
      cgp = (perc / 9.5).toFixed(1)
    }
    else if (e.target.value == "th") {
      arr.push(gradecard.gradecard.theory)

      arr[0].forEach((el) => {
        if (el[el.length - 1] == "COMPLETED") {
          arr2 += Number(el[el.length - 2])
          leng += 1;
        }

      })
      perc = (arr2 / leng).toFixed(1);
      cgp = (perc / 10).toFixed(1)
    }
    else if (e.target.value == "pr") {
      arr.push(gradecard.gradecard.practical)

      arr[0].forEach((el) => {
        if (el[el.length - 1] == "COMPLETED") {
          arr2 += Number(el[el.length - 2])
          leng += 1;
        }

      })
      perc = (arr2 / leng).toFixed(1);
      cgp = (perc / 10).toFixed(1)
    }
    console.log(perc, cgp, arr2)
    setpercentage(perc + " %")
    setcgpa(cgp + " CGPA")
  }
  let programearr = [
    ["BCA","BCAOL","MCA","MCAOL","MP","MPB","PGDCA","PGDCA_NEW","PGDHRM","PGDFM","PGDOM","PGDMM","PGDFMP","MBF","MCA_NEW"
  ],

    ["ASSO","BA","BCOM","BDP","BSC"
    ],

    ["ACFS","ACISE","ACPDM","ACSEPD","ACSM","ADACM","ADAOM","ADTS","BAADM","BAAHD","BAASK","BAAVFX","BACT","BAFC","BAFD","BAFMP","BAFSM","BAGS","BAIHA","BAPFHMH","BARCH","BASKH","BAUDH","BAVMSME","BBA","BBARIL","BBARL","BBARS","BBARSDL","BBASM","BCOMAF","BCOMCAA","BCOMFCA","BED","BEDSE","BHM","BIHM","BLIS","BLISOL","BLS","BMIT","BMLT","BMRHIT","BNS","BPCCHN","BPP","BRTT","BSCFLAD","BSCFMRM","BSCFWP","BSCFWT","BSCHIHA","BSCHOT","BSCLGAD","BSCN","BSCRFM","BSW","BTAE","BTCLEVI","BTCM","BTCSVI","BTE","BTECVI","BTELVI","BTME","BTMEVI","BTS","BTSOL","BTWRE","CAFE","CAHC","CAHT","CAL","CALOL","CAPMER","CARH","CBKG","CBS","CCDP","CCH","CCITSK","CCLBL","CCLC","CCOMO","CCP","CCPD","CCR","CCSS","CDCW","CDM","CDO","CELL","CEMBA","CEMPA","CES","CESECP","CESEHI","CESEMR","CESEVI","CETE","CETM","CFAID","CFBO","CFDE","CFE","CFL","CFLOL","CFN","CFNOL","CFO","CFS","CFSTY","CGAS","CGCA","CGDA","CGL","CGSL","CHAA","CHBCP","CHBHC","CHCWM","CHET","CHHA","CHO","CHR","CIAP","CIAT","CIB","CIC","CICTAL","CIE","CIF","CIG","CIHL","CIS","CIT","CITOL","CJD","CJL","CKLC","CLD","CLGM","CLIS","CLISOL","CLTA","CMAD","CMCHC","CMCHN","CNCC","CNGOM","CNIC","CNIN","CNM","COF","CPABN","CPAHM","CPAKM","CPAKT","CPAMP","CPATHA","CPDT","CPE","CPEL","CPF","CPFM","CPHA","CPHN","CPISAS","CPLT","CPPDPT","CPSCM","CPSCMOL","CPSK","CPSL","CPT","CPVE","CPY","CRCS","CRD","CRDOL","CRFF","CRUL","CRULOL","CSCDM","CSEPD","CSI","CSLC","CSLCOL","CSLF","CSM","CSUC","CSUS","CSWATT","CSWCJS","CSWM","CTAO","CTE","CTGS","CTPM","CTRBS","CTRBSOL","CTS","CTSOL","CTVM","CUL","CULOL","CVAA","CVAP","CVAS","CVG","CWDL","CWED","CWHM","CYP","DAFE","DAQ","DBPOFA","DCBRE","DCCN","DCE","DCEOL","DCH","DCLC","DCLE","DCLE(G)","DCLEVI","DCSVI","DCUL","DCYP","DDHM","DDT","DECE","DECSEMR","DECVI","DELED","DELVI","DEME","DESD","DEVMT","DFPT","DFS","DFSTYM","DHELS","DHHM","DHORT","DIPP","DIR","DIRIL","DM(ISHE)","DME","DMEVI","DMLT","DMOP","DMT","DNA","DNHE","DNHEOL","DPE","DPLAD","DPVCPO","DPVE","DRIT","DSCDM","DSM","DTG","DTH","DTS","DTSOL","DUL","DVAPFV","DVRMR","DWED","DWM","EMBAHM","EMBAIT","EXMBA","FCED","IPHDPA","JHM","MAAE","MAAN","MAAPM","MAARB","MACSR","MADE","MADEOL","MADP","MADVS","MAEDS","MAEDU","MAEMPM","MAEOH","MAER","MAEVS","MAFCS","MAFL","MAFRM","MAGD","MAGPS","MAH","MAHV","MAJDM","MAJEM","MAJMC","MAJMCOL","MAJMCT","MAJY","MAPC","MAPD","MAPY","MARD","MARDOL","MASA","MASS","MASSOL","MATS","MATSOL","MAUD","MAUS","MAVS","MAWGS","MAWGSCL","MBA","MBAAVBM","MBABFEV","MBABM","MBACG","MBACN","MBACT","MBAEV","MBAFM","MBAFT","MBAHM","MBAIHM","MBAITM","MBAMAFCI","MBAMM","MBANIM","MBAOL","MBAOM","MBARS","MBASCMFL","MBATEXM","MBF","MCOM","MCOMBPCG","MCOMFT","MCOMIDT","MCOMMAFS","MCOMOL","MEC","MED","MEDSEHI","MEDSELD","MEDSEMR","MEDSEVI","MEG","MEGOL","MFAP","MGPSOL","MHA","MHD","MHDOL","MIPL","MLD","MLIS","MLS","MPA","MPAHVM","MPATHA","MPHILCHEM","MPHILCOM","MPHILDE","MPHILEC","MPHILGEOG","MPHILJMC","MPHILPS","MPHILSOC","MPHILSW","MPHILTH","MPHILTT","MPS","MSBOBI","MSBOCC","MSBOMM","MSBOT","MSCAEC","MSCAS","MSCBIBO","MSCCAD","MSCCFT","MSCCHEM","MSCCRD","MSCDFSM","MSCENV","MSCFDP","MSCFMRM","MSCFSQM","MSCFWT","MSCIS","MSCLGAD","MSCLSC","MSCMACS","MSCRFM","MSCRWEE","MSCVMCD","MSK","MSNN","MSO","MSST","MSW","MSWC","MSWG","MSWP","MTECHAE","MTECHCS","MTECHESD","MTECHISS","MTECHNB","MTECHNE","MTECHSD","MTECHSR","MTECHST","MTECHTC","MTECHTS","MTECHVD","MTM","MTTM","PDCDM","PGCACP","PGCAE","PGCAP","PGCAPOL","PGCAR","PGCBGSA","PGCBHT","PGCCC","PGCCL","PGCCL-OL","PGCE","PGCEDS","PGCENC","PGCGI","PGCGPS","PGCGPSOL","PGCHI","PGCIATIVI","PGCINDS","PGCIPWS","PGCMDM","PGCMHT","PGCMI","PGCML","PGCMRR","PGCOI","PGCPDN","PGCPDT","PGCPM","PGCPP","PGCPPK","PGCQM","PGCRW","PGCSO","PGCSRVS","PGCULSA","PGDAB","PGDAC","PGDACP","PGDAE","PGDAML","PGDAPP","PGDAST","PGDAW","PGDBE","PGDBLT","PGDBP","PGDCC","PGDCFT","PGDCJ","PGDCOUN","PGDCSR","PGDDC","PGDDCOL","PGDDE","PGDDEOL","PGDDM","PGDDVS","PGDECFE","PGDEDS","PGDEL","PGDEMA","PGDEME","PGDEML","PGDENLW","PGDENLW-OL","PGDEOH","PGDEOHOL","PGDESD","PGDET","PGDFCS","PGDFIMKT","PGDFSQM","PGDFSTYDM","PGDFT","PGDGBL(FF)","PGDGBL(PT)","PGDGI","PGDGM","PGDGPS","PGDGPSOL","PGDHE","PGDHEM","PGDHHM","PGDHIVM","PGDHO","PGDIBO","PGDICG","PGDIDM","PGDIDMOL","PGDIE","PGDIFM","PGDIHRM","PGDIMM","PGDINDS","PGDIOM","PGDIPR","PGDIS","PGDISM","PGDLAN","PGDLPO","PGDMCH","PGDMD","PGDMH","PGDMIDI","PGDMISHE","PGDMRR","PGDNLEG","PGDNOV","PGDPDN","PGDPM","PGDPPED","PGDPSM","PGDRBI","PGDRD","PGDRDOL","PGDREPY","PGDREPYDL","PGDRP","PGDSHST","PGDSIC","PGDSLM","PGDSO","PGDSS","PGDSSOL","PGDSW","PGDSWT","PGDT","PGDTRM","PGDUG","PGDUPDL","PGDVS","PGDWGS","PGDWI","PGDWM","PGJMC","PGJMCOL","PGPCSEHI","PGPCSEMR","PGPCSEVI","PGPDSEHI","PGPDSEMR","PGPDSEVI","PHDAGE","PHDAL","PHDAN","PHDBC","PHDCD","PHDCHEM","PHDCOM","PHDCS","PHDDE","PHDDR","PHDDV","PHDEC","PHDEDS","PHDENG","PHDES","PHDEV","PHDFL","PHDFN","PHDGDS","PHDGEOG","PHDGG","PHDGPS","PHDGY","PHDHC","PHDHIN","PHDHIS","PHDITS","PHDJMC","PHDLE","PHDLIS","PHDLS","PHDMD","PHDMGMT","PHDMT","PHDMTED","PHDNS","PHDPA","PHDPC","PHDPH","PHDPS","PHDPVA","PHDRD","PHDRPA","PHDSK","PHDSOC","PHDSTAT","PHDSW","PHDTS","PHDTT","PHDUL","PHDVE","PHDWS","SAVINI","SSB"
    ],
    ["BAECH","BAEGH","BAG","BAHDH","BAHIH","BAPAH","BAPCH","BAPSH","BASOH","BAVTM","BCOMG","BCOMOL","BSCANH","BSCBCH","BSCG","BSWG","BSWGOL"
    ]
  ]

  const checkGrade = async (e) => {
    e.preventDefault();

   
    setLoad(true)
    gradecard.gradecard.incompleted = [];
    gradecard.gradecard.theory = [];
    gradecard.gradecard.practical = [];

    const url = "https://killdeer-precise-zebra.ngrok-free.app/gradecard"
    // Set the data state inside the event handler
    const data = {
      "program": program,
      "enrollmentno": enrollmentno,
      "type": new String(type)
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
              else if (k == 5) {
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

      setshowgradecard(true)
      setLoad(false)
    } catch (error) {
      console.log(error)
    } finally {

    }


  };

  const downloadGradeCard = () => {
    const elem = document.getElementById('fullmarksheet')
    html2canvas(elem).then(canvas => {
      let im = canvas.toDataURL('image/png')
      if (gradeCardType == 'pdf') {
        const rect = elem.getBoundingClientRect();
        const widthMM = (rect.width / window.innerWidth) * 229; // A4 width in mm
        const heightMM = (rect.height / window.innerHeight) * 297;
        const pdf = new jspdf({
          orientation: 'portrait', // 'portrait' or 'landscape'
          unit: 'mm', // measurement unit
          format: [Math.abs(widthMM), heightMM], // set custom page size
        });

        pdf.addImage(im, 'PNG', 0, 0);
        pdf.save('gradecard_' + gradecard.enrollmentno + '.pdf');
      }
      else {
        let a = document.createElement('a')

        let filename = 'gradecard_' + gradecard.enrollmentno + '.png';
        filename.slice()
        a.download = filename
        a.href = im;
        a.click()
      }
      elem.style.scale = '.9'
    })
  }



  return (
    <>    <div>
      <form method='post' className='gradeform'>
        <label htmlFor="program" className="program">
          <select name="program" id="" onChange={(e) => { setProgram(e.target.value);
          programearr.forEach((elem, ind) => {
            elem.forEach(el => {
              if (e.target.value == el) {
                setType(ind + 1)
                console.log(type)
              }
      
            })
      
      
          })
             }}>
            <option>Select Programme</option>
            <option value="ACE">ACE</option>  <option value="ACFS">ACFS</option>  <option value="ACISE">ACISE</option>  <option value="ACPDM">ACPDM</option>  <option value="ACPSD">ACPSD</option>  <option value="ACSEPD">ACSEPD</option>  <option value="ACSM">ACSM</option>  <option value="ADACM">ADACM</option>  <option value="ADAOM">ADAOM</option>  <option value="ADCM">ADCM</option>  <option value="ADIT">ADIT</option>  <option value="ADTS">ADTS</option>  <option value="AIPR">AIPR</option>  <option value="APDF">APDF</option>  <option value="APSMBIO">APSMBIO</option>  <option value="APSMG">APSMG</option>  <option value="APSMW">APSMW</option>  <option value="APSS">APSS</option>  <option value="APVPFV">APVPFV</option>  <option value="ASSO">ASSO</option>  <option value="ATPD">ATPD</option>  <option value="BA">BA</option>  <option value="BAADM">BAADM</option>  <option value="BAASLS">BAASLS</option>  <option value="BAAVFX">BAAVFX</option>  <option value="BACT">BACT</option>  <option value="BAECH">BAECH</option>  <option value="BAEGH">BAEGH</option>  <option value="BAFC">BAFC</option>  <option value="BAFD">BAFD</option>  <option value="BAFMP">BAFMP</option>  <option value="BAG">BAG</option>  <option value="BAHDH">BAHDH</option>  <option value="BAHIH">BAHIH</option>  <option value="BAIHA">BAIHA</option>  <option value="BAPAH">BAPAH</option>  <option value="BAPCH">BAPCH</option>  <option value="BAPFHMH">BAPFHMH</option>  <option value="BAPSH">BAPSH</option>  <option value="BARCH">BARCH</option>  <option value="BASKH">BASKH</option>  <option value="BASOH">BASOH</option>  <option value="BAUDH">BAUDH</option>  <option value="BAVMSME">BAVMSME</option> <option value="BAVTM">BAVTM</option>  <option value="BBARL">BBARL</option>  <option value="BBARS">BBARS</option>  <option value="BBARSDL">BBARSDL</option>  <option value="BBASM">BBASM</option>  <option value="BCA">BCA</option>  <option value="BCAOL">BCAOL</option>  <option value="BCOM">BCOM</option>  <option value="BCOMAF">BCOMAF</option>  <option value="BCOMCAA">BCOMCAA</option>  <option value="BCOMFCA">BCOMFCA</option>  <option value="BCOMG">BCOMG</option>  <option value="BCOMOL">BCOMOL</option>  <option value="BCSSI">BCSSI</option>  <option value="BED">BED</option>  <option value="BEDSE">BEDSE</option>  <option value="BEDSEHI">BEDSEHI</option>  <option value="BEDSEMR">BEDSEMR</option>  <option value="BEDSEVI">BEDSEVI</option>  <option value="BHM">BHM</option>  <option value="BIHM">BIHM</option>  <option value="BIT">BIT</option>  <option value="BLIS">BLIS</option>  <option value="BLISOL">BLISOL</option>  <option value="BMIT">BMIT</option>  <option value="BMLT">BMLT</option>  <option value="BMRHIT">BMRHIT</option>  <option value="BNS">BNS</option>  <option value="BPCCHN">BPCCHN</option>  <option value="BPP">BPP</option>  <option value="BPPDS">BPPDS</option>  <option value="BRTT">BRTT</option>  <option value="BSC">BSC</option>  <option value="BSCANH">BSCANH</option>  <option value="BSCBCH">BSCBCH</option>  <option value="BSCFLAD">BSCFLAD</option>  <option value="BSCFMRM">BSCFMRM</option>  <option value="BSCFWP">BSCFWP</option>  <option value="BSCFWT">BSCFWT</option>  <option value="BSCG">BSCG</option>  <option value="BSCHIHA">BSCHIHA</option>  <option value="BSCHOT">BSCHOT</option>  <option value="BSCLGAD">BSCLGAD</option>  <option value="BSCN">BSCN</option>  <option value="BSCRFM">BSCRFM</option>  <option value="BSW">BSW</option>  <option value="BSWG">BSWG</option>  <option value="BSWGOL">BSWGOL</option>  <option value="BTAE">BTAE</option>  <option value="BTCLEVI">BTCLEVI</option>  <option value="BTCM">BTCM</option>  <option value="BTCSVI">BTCSVI</option>  <option value="BTECVI">BTECVI</option>  <option value="BTELVI">BTELVI</option>  <option value="BTME">BTME</option>  <option value="BTMEVI">BTMEVI</option>  <option value="BTS">BTS</option>  <option value="BTSOL">BTSOL</option>  <option value="BTWRE">BTWRE</option>  <option value="CAFE">CAFE</option>  <option value="CAHC">CAHC</option>  <option value="CAHT">CAHT</option>  <option value="CAIS">CAIS</option>  <option value="CAL">CAL</option>  <option value="CALOL">CALOL</option>  <option value="CAP">CAP</option>  <option value="CARH">CARH</option>  <option value="CAY">CAY</option>  <option value="CBED">CBED</option>  <option value="CBS">CBS</option>  <option value="CCDP">CCDP</option>  <option value="CCEANM">CCEANM</option>  <option value="CCH">CCH</option>  <option value="CCITSK">CCITSK</option>  <option value="CCLBL">CCLBL</option>  <option value="CCLC">CCLC</option>  <option value="CCMH">CCMH</option>  <option value="CCP">CCP</option>  <option value="CCPD">CCPD</option>  <option value="CCR">CCR</option>  <option value="CCSS">CCSS</option>  <option value="CDCW">CDCW</option>  <option value="CDM">CDM</option>  <option value="CDNK">CDNK</option>  <option value="CDNMA">CDNMA</option>  <option value="CDO">CDO</option>  <option value="CDTP">CDTP</option>  <option value="CELL">CELL</option>  <option value="CEMBA">CEMBA</option>  <option value="CEMPA">CEMPA</option>  <option value="CES">CES</option>  <option value="CESECP">CESECP</option>  <option value="CESEHI">CESEHI</option>  <option value="CESEMR">CESEMR</option>  <option value="CESEVI">CESEVI</option>  <option value="CETE">CETE</option>  <option value="CETM">CETM</option>  <option value="CFAID">CFAID</option>  <option value="CFBO">CFBO</option>  <option value="CFDE">CFDE</option>  <option value="CFE">CFE</option>  <option value="CFL">CFL</option>  <option value="CFLOL">CFLOL</option>  <option value="CFN">CFN</option>  <option value="CFNOL">CFNOL</option>  <option value="CFO">CFO</option>  <option value="CFS">CFS</option>  <option value="CFSTY">CFSTY</option>  <option value="CGAS">CGAS</option>  <option value="CGCA">CGCA</option>  <option value="CGDA">CGDA</option>  <option value="CGL">CGL</option>  <option value="CGMSM">CGMSM</option>  <option value="CHAA">CHAA</option>  <option value="CHBCP">CHBCP</option>  <option value="CHBHC">CHBHC</option>  <option value="CHCWM">CHCWM</option>  <option value="CHET">CHET</option>  <option value="CHHA">CHHA</option>  <option value="CHO">CHO</option>  <option value="CHR">CHR</option>  <option value="CIAP">CIAP</option>  <option value="CIAT">CIAT</option>  <option value="CIB">CIB</option>  <option value="CIC">CIC</option>  <option value="CICTAL">CICTAL</option>  <option value="CIE">CIE</option>  <option value="CIF">CIF</option>  <option value="CIG">CIG</option>  <option value="CIHL">CIHL</option>  <option value="CIS">CIS</option>  <option value="CIT">CIT</option>  <option value="CITOL">CITOL</option>  <option value="CITSM">CITSM</option>  <option value="CJD">CJD</option>  <option value="CJL">CJL</option>  <option value="CKLC">CKLC</option>  <option value="CLD">CLD</option>  <option value="CLGM">CLGM</option>  <option value="CLIS">CLIS</option>  <option value="CLISOL">CLISOL</option>  <option value="CLL">CLL</option>  <option value="CLP">CLP</option>  <option value="CLTA">CLTA</option>  <option value="CMAD">CMAD</option>  <option value="CMCHC">CMCHC</option>  <option value="CMCHN">CMCHN</option>  <option value="CMSR">CMSR</option>  <option value="CNCC">CNCC</option>  <option value="CNIC">CNIC</option>  <option value="CNIN">CNIN</option>  <option value="CNM">CNM</option>  <option value="COF">COF</option>  <option value="CPA">CPA</option>  <option value="CPABN">CPABN</option>  <option value="CPAHM">CPAHM</option>  <option value="CPAKM">CPAKM</option>  <option value="CPAKP">CPAKP</option>  <option value="CPAKT">CPAKT</option>  <option value="CPAM">CPAM</option>  <option value="CPAMP">CPAMP</option>  <option value="CPAOS">CPAOS</option>  <option value="CPAT">CPAT</option>  <option value="CPATHA">CPATHA</option>  <option value="CPE">CPE</option>  <option value="CPEL">CPEL</option>  <option value="CPF">CPF</option>  <option value="CPFM">CPFM</option>  <option value="CPHA">CPHA</option>  <option value="CPHN">CPHN</option>  <option value="CPISAS">CPISAS</option>  <option value="CPLT">CPLT</option>  <option value="CPPDPT">CPPDPT</option>  <option value="CPPL">CPPL</option>  <option value="CPS">CPS</option>  <option value="CPSCM">CPSCM</option>  <option value="CPSCMOL">CPSCMOL</option>  <option value="CPSK">CPSK</option>  <option value="CPSL">CPSL</option>  <option value="CPT">CPT</option>  <option value="CPVE">CPVE</option>  <option value="CPY">CPY</option>  <option value="CRCS">CRCS</option>  <option value="CRD">CRD</option>  <option value="CRDOL">CRDOL</option>  <option value="CRF">CRF</option>  <option value="CRFF">CRFF</option>  <option value="CRH">CRH</option>  <option value="CRHT">CRHT</option>  <option value="CRM">CRM</option>  <option value="CRS">CRS</option>  <option value="CRUL">CRUL</option>  <option value="CRULOL">CRULOL</option>  <option value="CSEPD">CSEPD</option>  <option value="CSI">CSI</option>  <option value="CSLC">CSLC</option>  <option value="CSLCOL">CSLCOL</option>  <option value="CSLF">CSLF</option>  <option value="CSM">CSM</option>  <option value="CSSA">CSSA</option>  <option value="CSUC">CSUC</option>  <option value="CSUS">CSUS</option>  <option value="CSWATT">CSWATT</option>  <option value="CSWCJS">CSWCJS</option>  <option value="CSWM">CSWM</option>  <option value="CTAO">CTAO</option>  <option value="CTE">CTE</option>  <option value="CTGS">CTGS</option>  <option value="CTPM">CTPM</option>  <option value="CTRBS">CTRBS</option>  <option value="CTRBSOL">CTRBSOL</option>  <option value="CTS">CTS</option>  <option value="CTSOL">CTSOL</option>  <option value="CTVM">CTVM</option>  <option value="CUL">CUL</option>  <option value="CULOL">CULOL</option>  <option value="CVA">CVA</option>  <option value="CVAA">CVAA</option>  <option value="CVAP">CVAP</option>  <option value="CVAS">CVAS</option>  <option value="CWDL">CWDL</option>  <option value="CWED">CWED</option>  <option value="CWHM">CWHM</option>  <option value="CYP">CYP</option>  <option value="DAFE">DAFE</option>  <option value="DAQ">DAQ</option>  <option value="DBPOFA">DBPOFA</option>  <option value="DCCN">DCCN</option>  <option value="DCE">DCE</option>  <option value="DCH">DCH</option>  <option value="DCIM">DCIM</option>  <option value="DCLC">DCLC</option>  <option value="DCLE">DCLE</option>  <option value="DCLEG">DCLEG</option>  <option value="DCLEVI">DCLEVI</option>  <option value="DCSVI">DCSVI</option>  <option value="DCUL">DCUL</option>  <option value="DCYP">DCYP</option>  <option value="DDT">DDT</option>  <option value="DECE">DECE</option>  <option value="DECVI">DECVI</option>  <option value="DELED">DELED</option>  <option value="DELVI">DELVI</option>  <option value="DEME">DEME</option>  <option value="DESD">DESD</option>  <option value="DEVMT">DEVMT</option>  <option value="DFPT">DFPT</option>  <option value="DFS">DFS</option>  <option value="DFSTYM">DFSTYM</option>  <option value="DHORT">DHORT</option>  <option value="DHOTRM">DHOTRM</option>  <option value="DIM">DIM</option>  <option value="DIPP">DIPP</option>  <option value="DIR">DIR</option>  <option value="DME">DME</option>  <option value="DMEVI">DMEVI</option>  <option value="DMLT">DMLT</option>  <option value="DMOP">DMOP</option>  <option value="DMT">DMT</option>  <option value="DNA">DNA</option>  <option value="DNHE">DNHE</option>  <option value="DNHEOL">DNHEOL</option>  <option value="DNS">DNS</option>  <option value="DPE">DPE</option>  <option value="DPLAD">DPLAD</option>  <option value="DPVCPO">DPVCPO</option>  <option value="DPVE">DPVE</option>  <option value="DRIT">DRIT</option>  <option value="DSCDM">DSCDM</option>  <option value="DSM">DSM</option>  <option value="DTG">DTG</option>  <option value="DTH">DTH</option>  <option value="DTS">DTS</option>  <option value="DTSOL">DTSOL</option>  <option value="DUL">DUL</option>  <option value="DULOL">DULOL</option>  <option value="DVAPFV">DVAPFV</option>  <option value="DWED">DWED</option>  <option value="DWM">DWM</option>  <option value="EMBAHM">EMBAHM</option>  <option value="EMBAIHM">EMBAIHM</option>  <option value="EMBAIT">EMBAIT</option>  <option value="EXMBA">EXMBA</option>  <option value="FCED">FCED</option>  <option value="GST">GST</option>  <option value="IPHDPA">IPHDPA</option>  <option value="LPHECO">LPHECO</option>  <option value="LPNSSD">LPNSSD</option>  <option value="MAAE">MAAE</option>  <option value="MAAN">MAAN</option>  <option value="MAAPM">MAAPM</option>  <option value="MACSR">MACSR</option>  <option value="MADE">MADE</option>  <option value="MADP">MADP</option>  <option value="MADVS">MADVS</option>  <option value="MAEDS">MAEDS</option>  <option value="MAEDU">MAEDU</option>  <option value="MAEMPM">MAEMPM</option>  <option value="MAEOH">MAEOH</option>  <option value="MAER">MAER</option>  <option value="MAFCS">MAFCS</option>  <option value="MAFRM">MAFRM</option>  <option value="MAGD">MAGD</option>  <option value="MAH">MAH</option>  <option value="MAJMC">MAJMC</option>  <option value="MAJMCOL">MAJMCOL</option>  <option value="MAJY">MAJY</option>  <option value="MAPC">MAPC</option>  <option value="MAPD">MAPD</option>  <option value="MAPY">MAPY</option>  <option value="MARD">MARD</option>  <option value="MARDOL">MARDOL</option>  <option value="MASA">MASA</option>  <option value="MASAS">MASAS</option>  <option value="MASS">MASS</option>  <option value="MATS">MATS</option>  <option value="MATSOL">MATSOL</option>  <option value="MAUD">MAUD</option>  <option value="MAUS">MAUS</option>  <option value="MAWGS">MAWGS</option>  <option value="MAWGSCL">MAWGSCL</option>  <option value="MBA">MBA</option>  <option value="MBAAVBM">MBAAVBM</option>  <option value="MBABFEV">MBABFEV</option>  <option value="MBABM">MBABM</option>  <option value="MBACG">MBACG</option>  <option value="MBACN">MBACN</option>  <option value="MBACT">MBACT</option>  <option value="MBAEV">MBAEV</option>  <option value="MBAFM">MBAFM</option>  <option value="MBAFT">MBAFT</option>  <option value="MBAHM">MBAHM</option>  <option value="MBAIHM">MBAIHM</option>  <option value="MBAITM">MBAITM</option>  <option value="MBAMAFCI">MBAMAFCI</option>  <option value="MBANIM">MBANIM</option>  <option value="MBAOL">MBAOL</option>  <option value="MBARS">MBARS</option>  <option value="MBASCMFL">MBASCMFL</option>  <option value="MBATEXM">MBATEXM</option>  <option value="MBF">MBF</option>  <option value="MCA">MCA</option>  <option value="MCAOL">MCAOL</option>  <option value="MCA_NEW">MCA_NEW</option>  <option value="MCOM">MCOM</option>  <option value="MCOMBPCG">MCOMBPCG</option>  <option value="MCOMFT">MCOMFT</option>  <option value="MCOMIDT">MCOMIDT</option>  <option value="MCOMMAFS">MCOMMAFS</option>  <option value="MEC">MEC</option>  <option value="MED">MED</option>  <option value="MEDSEHI">MEDSEHI</option>  <option value="MEDSELD">MEDSELD</option>  <option value="MEDSEMR">MEDSEMR</option>  <option value="MEDSEVI">MEDSEVI</option>  <option value="MEG">MEG</option>  <option value="MEGOL">MEGOL</option>  <option value="MFAP">MFAP</option>  <option value="MGPS">MGPS</option>  <option value="MGPSOL">MGPSOL</option>  <option value="MHA">MHA</option>  <option value="MHD">MHD</option>  <option value="MHDOL">MHDOL</option>  <option value="MIPL">MIPL</option>  <option value="MLD">MLD</option>  <option value="MLIS">MLIS</option>  <option value="MP">MP</option>  <option value="MPA">MPA</option>  <option value="MPAHVM">MPAHVM</option>  <option value="MPATHA">MPATHA</option>  <option value="MPB">MPB</option>  <option value="MPHIL">MPHIL</option>  <option value="MPHILCHEM">MPHILCHEM</option>  <option value="MPHILCOM">MPHILCOM</option>  <option value="MPHILDE">MPHILDE</option>  <option value="MPHILEC">MPHILEC</option>  <option value="MPHILGEOG">MPHILGEOG</option>  <option value="MPHILJMC">MPHILJMC</option>  <option value="MPHILPS">MPHILPS</option>  <option value="MPHILRSO">MPHILRSO</option>  <option value="MPHILSO">MPHILSO</option>  <option value="MPHILSOC">MPHILSOC</option>  <option value="MPHILSW">MPHILSW</option>  <option value="MPHILTH">MPHILTH</option>  <option value="MPHILTT">MPHILTT</option>  <option value="MPP">MPP</option>  <option value="MPS">MPS</option>  <option value="MSBOBI">MSBOBI</option>  <option value="MSBOCC">MSBOCC</option>  <option value="MSBOMM">MSBOMM</option>  <option value="MSBOT">MSBOT</option>  <option value="MSCAEC">MSCAEC</option>  <option value="MSCAS">MSCAS</option>  <option value="MSCBIBO">MSCBIBO</option>  <option value="MSCCAD">MSCCAD</option>  <option value="MSCCFT">MSCCFT</option>  <option value="MSCCHEM">MSCCHEM</option>  <option value="MSCCRD">MSCCRD</option>  <option value="MSCDFSM">MSCDFSM</option>  <option value="MSCENV">MSCENV</option>  <option value="MSCFDP">MSCFDP</option>  <option value="MSCFMRM">MSCFMRM</option>  <option value="MSCFWT">MSCFWT</option>  <option value="MSCIS">MSCIS</option>  <option value="MSCLGAD">MSCLGAD</option>  <option value="MSCLSC">MSCLSC</option>  <option value="MSCMACS">MSCMACS</option>  <option value="MSCRFM">MSCRFM</option>  <option value="MSCRWEE">MSCRWEE</option>  <option value="MSCVMCD">MSCVMCD</option>  <option value="MSK">MSK</option>  <option value="MSNN">MSNN</option>  <option value="MSO">MSO</option>  <option value="MSST">MSST</option>  <option value="MSW">MSW</option>  <option value="MSWC">MSWC</option>  <option value="MSWNE">MSWNE</option>  <option value="MSWP">MSWP</option>  <option value="MTECHAE">MTECHAE</option>  <option value="MTECHCS">MTECHCS</option>  <option value="MTECHESD">MTECHESD</option>  <option value="MTECHISS">MTECHISS</option>  <option value="MTECHNB">MTECHNB</option>  <option value="MTECHNE">MTECHNE</option>  <option value="MTECHSD">MTECHSD</option>  <option value="MTECHSR">MTECHSR</option>  <option value="MTECHST">MTECHST</option>  <option value="MTECHTC">MTECHTC</option>  <option value="MTECHTS">MTECHTS</option>  <option value="MTECHVD">MTECHVD</option>  <option value="MTM">MTM</option>  <option value="MTTM">MTTM</option>  <option value="NCDCP">NCDCP</option>  <option value="NIPDF">NIPDF</option>  <option value="NIPFPP">NIPFPP</option>  <option value="NIPOA">NIPOA</option>  <option value="NIPWM">NIPWM</option>  <option value="PCSEPD">PCSEPD</option>  <option value="PDCDM">PDCDM</option>  <option value="PGCACP">PGCACP</option>  <option value="PGCAE">PGCAE</option>  <option value="PGCAP">PGCAP</option>  <option value="PGCAPOL">PGCAPOL</option>  <option value="PGCAR">PGCAR</option>  <option value="PGCBGSA">PGCBGSA</option>  <option value="PGCBHT">PGCBHT</option>  <option value="PGCCC">PGCCC</option>  <option value="PGCCL">PGCCL</option>  <option value="PGCCL_OL">PGCCL_OL</option>  <option value="PGCCP">PGCCP</option>  <option value="PGCE">PGCE</option>  <option value="PGCEDS">PGCEDS</option>  <option value="PGCENC">PGCENC</option>  <option value="PGCEPD">PGCEPD</option>  <option value="PGCGI">PGCGI</option>  <option value="PGCGPS">PGCGPS</option>  <option value="PGCGPSOL">PGCGPSOL</option>  <option value="PGCHI">PGCHI</option>  <option value="PGCIATIVI">PGCIATIVI</option>  <option value="PGCIERA">PGCIERA</option>  <option value="PGCINDS">PGCINDS</option>  <option value="PGCIPWS">PGCIPWS</option>  <option value="PGCIV">PGCIV</option>  <option value="PGCMDM">PGCMDM</option>  <option value="PGCMHT">PGCMHT</option>  <option value="PGCMI">PGCMI</option>  <option value="PGCML">PGCML</option>  <option value="PGCMRR">PGCMRR</option>  <option value="PGCOI">PGCOI</option>  <option value="PGCP">PGCP</option>  <option value="PGCPDN">PGCPDN</option>  <option value="PGCPDT">PGCPDT</option>  <option value="PGCPM">PGCPM</option>  <option value="PGCPP">PGCPP</option>  <option value="PGCPPK">PGCPPK</option>  <option value="PGCQM">PGCQM</option>  <option value="PGCRW">PGCRW</option>  <option value="PGCSO">PGCSO</option>  <option value="PGCSRVS">PGCSRVS</option>  <option value="PGCTW">PGCTW</option>  <option value="PGCULSA">PGCULSA</option>  <option value="PGDAB">PGDAB</option>  <option value="PGDAC">PGDAC</option>  <option value="PGDACP">PGDACP</option>  <option value="PGDAE">PGDAE</option>  <option value="PGDAPP">PGDAPP</option>  <option value="PGDAST">PGDAST</option>  <option value="PGDAW">PGDAW</option>  <option value="PGDBE">PGDBE</option>  <option value="PGDBP">PGDBP</option>  <option value="PGDCA">PGDCA</option>  <option value="PGDCA_NEW">PGDCA_NEW</option>  <option value="PGDCC">PGDCC</option>  <option value="PGDCFT">PGDCFT</option>  <option value="PGDCJ">PGDCJ</option>  <option value="PGDCOUN">PGDCOUN</option>  <option value="PGDCSR">PGDCSR</option>  <option value="PGDDC">PGDDC</option>  <option value="PGDDE">PGDDE</option>  <option value="PGDDHM">PGDDHM</option>  <option value="PGDDM">PGDDM</option>  <option value="PGDDVS">PGDDVS</option>  <option value="PGDEDS">PGDEDS</option>  <option value="PGDEL">PGDEL</option>  <option value="PGDEMA">PGDEMA</option>  <option value="PGDENLW">PGDENLW</option>  <option value="PGDENLWOL">PGDENLWOL</option>  <option value="PGDEOH">PGDEOH</option>  <option value="PGDEOHOL">PGDEOHOL</option>  <option value="PGDESD">PGDESD</option>  <option value="PGDET">PGDET</option>  <option value="PGDFCS">PGDFCS</option>  <option value="PGDFIMKT">PGDFIMKT</option>  <option value="PGDFM">PGDFM</option>  <option value="PGDFMP">PGDFMP</option>  <option value="PGDFSQM">PGDFSQM</option>  <option value="PGDFSTYD">PGDFSTYD</option>  <option value="PGDFSTYDM">PGDFSTYDM</option>  <option value="PGDFT">PGDFT</option>  <option value="PGDGBL">PGDGBL</option>  <option value="PGDGBLFF">PGDGBLFF</option>  <option value="PGDGBLP">PGDGBLP</option>  <option value="PGDGBLPT">PGDGBLPT</option>  <option value="PGDGM">PGDGM</option>  <option value="PGDGPS">PGDGPS</option>  <option value="PGDGPSOL">PGDGPSOL</option>  <option value="PGDHAM">PGDHAM</option>  <option value="PGDHE">PGDHE</option>  <option value="PGDHEM">PGDHEM</option>  <option value="PGDHHM">PGDHHM</option>  <option value="PGDHIVM">PGDHIVM</option>  <option value="PGDHO">PGDHO</option>  <option value="PGDHRM">PGDHRM</option>  <option value="PGDIBO">PGDIBO</option>  <option value="PGDICG">PGDICG</option>  <option value="PGDIDM">PGDIDM</option>  <option value="PGDIE">PGDIE</option>  <option value="PGDIPR">PGDIPR</option>  <option value="PGDIS">PGDIS</option>  <option value="PGDLAN">PGDLAN</option>  <option value="PGDLPO">PGDLPO</option>  <option value="PGDMCH">PGDMCH</option>  <option value="PGDMD">PGDMD</option>  <option value="PGDMH">PGDMH</option>  <option value="PGDMIDI">PGDMIDI</option>  <option value="PGDMISHE">PGDMISHE</option>  <option value="PGDMM">PGDMM</option>  <option value="PGDMRR">PGDMRR</option>  <option value="PGDOM">PGDOM</option>  <option value="PGDPD">PGDPD</option>  <option value="PGDPDN">PGDPDN</option>  <option value="PGDPM">PGDPM</option>  <option value="PGDPPED">PGDPPED</option>  <option value="PGDPSM">PGDPSM</option>  <option value="PGDRBI">PGDRBI</option>  <option value="PGDRD">PGDRD</option>  <option value="PGDRDOL">PGDRDOL</option>  <option value="PGDREPY">PGDREPY</option>  <option value="PGDREPYDL">PGDREPYDL</option>  <option value="PGDRP">PGDRP</option>  <option value="PGDSHST">PGDSHST</option>  <option value="PGDSIC">PGDSIC</option>  <option value="PGDSLM">PGDSLM</option>  <option value="PGDSO">PGDSO</option>  <option value="PGDSS">PGDSS</option>  <option value="PGDSSOL">PGDSSOL</option>  <option value="PGDSW">PGDSW</option>  <option value="PGDSWT">PGDSWT</option>  <option value="PGDT">PGDT</option>  <option value="PGDTAC">PGDTAC</option>  <option value="PGDTCD">PGDTCD</option>  <option value="PGDTRM">PGDTRM</option>  <option value="PGDUG">PGDUG</option>  <option value="PGDUPDL">PGDUPDL</option>  <option value="PGDVSSA">PGDVSSA</option>  <option value="PGDWGS">PGDWGS</option>  <option value="PGJMC">PGJMC</option>  <option value="PGPCSEHI">PGPCSEHI</option>  <option value="PGPCSEMR">PGPCSEMR</option>  <option value="PGPCSEVI">PGPCSEVI</option>  <option value="PGPDSEHI">PGPDSEHI</option>  <option value="PGPDSEMR">PGPDSEMR</option>  <option value="PGPDSEVI">PGPDSEVI</option>  <option value="PHD">PHD</option>  <option value="PHDAE">PHDAE</option>  <option value="PHDAGE">PHDAGE</option>  <option value="PHDAL">PHDAL</option>  <option value="PHDAN">PHDAN</option>  <option value="PHDBC">PHDBC</option>  <option value="PHDCDEV">PHDCDEV</option>  <option value="PHDCEE">PHDCEE</option>  <option value="PHDCEM">PHDCEM</option>  <option value="PHDCENG">PHDCENG</option>  <option value="PHDCHE">PHDCHE</option>  <option value="PHDCHEM">PHDCHEM</option>  <option value="PHDCISC">PHDCISC</option>  <option value="PHDCMCE">PHDCMCE</option>  <option value="PHDCO">PHDCO</option>  <option value="PHDCOM">PHDCOM</option>  <option value="PHDCS">PHDCS</option>  <option value="PHDDE">PHDDE</option>  <option value="PHDDR">PHDDR</option>  <option value="PHDDS">PHDDS</option>  <option value="PHDDV">PHDDV</option>  <option value="PHDEC">PHDEC</option>  <option value="PHDEDS">PHDEDS</option>  <option value="PHDEDU">PHDEDU</option>  <option value="PHDENG">PHDENG</option>  <option value="PHDES">PHDES</option>  <option value="PHDEV">PHDEV</option>  <option value="PHDFA">PHDFA</option>  <option value="PHDFL">PHDFL</option>  <option value="PHDFN">PHDFN</option>  <option value="PHDGDS">PHDGDS</option>  <option value="PHDGEOG">PHDGEOG</option>  <option value="PHDGG">PHDGG</option>  <option value="PHDGTS">PHDGTS</option>  <option value="PHDGY">PHDGY</option>  <option value="PHDHC">PHDHC</option>  <option value="PHDHIN">PHDHIN</option>  <option value="PHDHIS">PHDHIS</option>  <option value="PHDITS">PHDITS</option>  <option value="PHDJMC">PHDJMC</option>  <option value="PHDLE">PHDLE</option>  <option value="PHDLIS">PHDLIS</option>  <option value="PHDLS">PHDLS</option>  <option value="PHDMCE">PHDMCE</option>  <option value="PHDMD">PHDMD</option>  <option value="PHDMGMT">PHDMGMT</option>  <option value="PHDMT">PHDMT</option>  <option value="PHDMTED">PHDMTED</option>  <option value="PHDMU">PHDMU</option>  <option value="PHDNS">PHDNS</option>  <option value="PHDNUR">PHDNUR</option>  <option value="PHDPA">PHDPA</option>  <option value="PHDPC">PHDPC</option>  <option value="PHDPH">PHDPH</option>  <option value="PHDPS">PHDPS</option>  <option value="PHDPVA">PHDPVA</option>  <option value="PHDRD">PHDRD</option>  <option value="PHDRSO">PHDRSO</option>  <option value="PHDSOC">PHDSOC</option>  <option value="PHDSTAT">PHDSTAT</option>  <option value="PHDSW">PHDSW</option>  <option value="PHDTH">PHDTH</option>  <option value="PHDTS">PHDTS</option>  <option value="PHDTT">PHDTT</option>  <option value="PHDVED">PHDVED</option>  <option value="PHDVET">PHDVET</option>  <option value="PHDWS">PHDWS</option>  <option value="SAVINI">SAVINI</option>  <option value="SSB">SSB</option>
          </select>
        </label>
        <label htmlFor="enrollmentno">
          <input type="text" name="enrollmentno" maxLength={10} onChange={(e) => { setEnrollmentno(e.target.value); if (e.target.value.length == 10) { document.querySelector('.submitfetchdata').style.background = '#36d90d' } else { document.querySelector('.submitfetchdata').style.background = 'gray' } }} placeholder='Enrollment No.' />
        </label>
        <label htmlFor="submit">
          <input className='submitfetchdata' type="submit" value="Check Grade" onClick={checkGrade} />
        </label>
      </form>
    </div>

      {
        showgradecard ? (<>

          <section className="marksheet">
            <div className="fullmarksheet" id='fullmarksheet'>
              <div className="upersidearea">
                <img src={ignou} alt="" className="ignoulogo" />
                <span className="slogan">
                  <h1>indira gandhi national open university</h1>
                  <span>Gradecard</span>
                  <b>Ignou</b>
                </span>
                <img src={ignouzone} style={{ transform: "scale(1)", marginLeft: "10px", borderRadius: "50%" }} alt="" className="ignouzone" />
              </div>

              <div className="personalinfo">
                <div className="nameandenroll">
                  <span className="name">
                    <b>Name :</b> <p>{gradecard.name}</p>
                  </span>
                  <span className="enrollment">
                    <b>Enrollment No. :</b> <p>{gradecard.enrollmentno}</p>
                  </span>
                </div>
                <div className="program">
                  <span className="prg">
                    <b>Program :</b> <p>{gradecard.program}</p>
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
                    Incomplete Exam
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
          <div className='downloadGradeCard'>
            <button className="printbtn" onClick={downloadGradeCard}>Download</button>
            <select onChange={(e) => { setGradeCardType(e.target.value) }}>
              <option value="img" selected>IMAGE</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
          <div className="percentcalc">
            <span className="select">

              <select name="" id="" onChange={changecalcpercentage}>
                <option value="t">Calculate </option>
                <option value="th">Only theory</option>
                <option value="pr">Only practical</option>
              </select>
            </span>
            <span className='select'>
              <p id="showcalcpercent">Percentage</p>
              <span>{percentage}</span>
            </span>
            <span className='select'>
              <p id="showcalcpercent">Cgpa</p>
              <span>{cgpa}</span>
            </span>
          </div>
        </>) : (<></>)
      }

      <p style={{ padding: "20px" }}>NOTE : this result is fetched from ignou api url our site is note save your personal data and result</p>
      {load && (<div className="loader"></div>)}

    </>

  );
};

export default Gradecard;
