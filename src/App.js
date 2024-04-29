import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/style/main.css";
import "./assets/style/style.css";
import "./assets/style/mobile-500.css";
import "./assets/style/animation.css";
import Bottommenu from "./assets/componants/bottommenu";

import Topmenu, { Search } from "./assets/componants/topmenu";
import More from "./assets/componants/more";
import Home from "./assets/componants/home";
import Assignment, { Checkurl } from "./assets/componants/assignment";
import Services from "./assets/componants/services";
import Gradecard from "./assets/componants/gradecard";
import Assignmentstatus from "./assets/componants/assignmentstatus";
import pageisunderconstruction from "./assets/componants/underconstruction";
import { DownloadAssignment } from "./assets/componants/downloadassignment";
import Pyp from "./assets/componants/pyp";
import notification from "./assets/componants/notification";
import axios from "axios";
import Profile from "./assets/componants/profile";
import Solveassignment from "./assets/componants/selectassignment";
import Book from "./assets/componants/books";
import BecomePartnerPage from "./assets/componants/partner";
import ReferEarnPage from "./assets/componants/referearn";
import SettingsPage from "./assets/componants/setting";
import Tools, { Pdftotext } from "./assets/componants/tools";
function App() {
  useEffect(() => {
    // Make API call to track visit
    if(localStorage.getItem('oldvisiter')==null){

      axios.get(
        "https://killdeer-precise-zebra.ngrok-free.app/assets/totalvisits"
      );
      localStorage.setItem('oldvisiter','')
    }
  
  }, []);

  const handleClick = (e) => {
    if (document.body.classList.contains("toggle")) {
      document.body.classList.remove("toggle");
    }
  };
  return (
    <>
      <Topmenu />
      <section className="homepartition">
        <div className="pagemenubar tg">
          <More />
        </div>
        <div className="pagecontent" onClick={handleClick}>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/more" Component={More}></Route>
            <Route path="/assignment" Component={Assignment}></Route>
            <Route path="/assignment/select" Component={Solveassignment}></Route>
            <Route path="/notification" Component={notification}></Route>
            <Route path="/assignment/:id" Component={Checkurl}></Route>
            <Route  path="/assignment/:id/:id"  Component={DownloadAssignment} ></Route>
            <Route path="/services" Component={Services}></Route>
            <Route path="/profile" Component={Profile}></Route>
            <Route path="/services/gradecard" Component={Gradecard}></Route>
            <Route path="/previousyearpaper" Component={Pyp}></Route>
            <Route path="/services/assignmentstatus" Component={Assignmentstatus} ></Route>
            <Route path="/Notes" Component={pageisunderconstruction} ></Route>
            <Route path="/books" Component={Book} ></Route>
            <Route path="/becomeapartner" Component={BecomePartnerPage} ></Route>
            <Route path="/referandearn" Component={ReferEarnPage} ></Route>
            <Route path="/setting" Component={SettingsPage} ></Route>
            <Route path="/tools" Component={Tools} ></Route>
            <Route path="/tools/pdftotext" Component={Pdftotext} ></Route>

            <Route component={pageisunderconstruction} />
          </Routes>
          {/* <Bottommenu /> */}
        </div>
      </section>
      <Routes>
        <Route path="/search" Component={Search}></Route>
      </Routes>
    </>
  );
}

export default App;
