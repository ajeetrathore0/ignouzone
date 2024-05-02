import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/style/main.css";
import "./assets/style/style.css";
import "./assets/style/mobile-500.css";
import "./assets/style/animation.css";

import Topmenu, { Search } from "./assets/componants/topmenu";
import More from "./assets/componants/more";
import Home from "./assets/componants/home";
import Services from "./assets/componants/services";
import pageisunderconstruction from "./assets/componants/underconstruction";
import notification from "./assets/componants/notification";
import axios from "axios";
import SettingsPage from "./assets/componants/setting";
import Tools, { Pdftotext } from "./assets/componants/tools";
import Assignment, { Assignmentaction, Assignmentadd, Viewassignment } from "./assets/componants/assignment";
import { Book, Savebook } from "./assets/componants/book";
function App() {


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
            <Route path="/assignment" Component={Assignment}></Route>
            <Route path="/assignment/free" Component={Assignmentaction}></Route>
            <Route path="/assignment/free/add" Component={Assignmentadd}></Route>
            <Route path="/assignment/free/view" Component={Viewassignment}></Route>
            <Route path="/assignment/paid" Component={Assignmentaction}></Route>
            <Route path="/assignment/paid/add" Component={Assignmentadd}></Route>
            <Route path="/assignment/paid/view" Component={Viewassignment}></Route>
            <Route path="/books" Component={Book}></Route>
            <Route path="/books/add" Component={Savebook}></Route>


            <Route component={pageisunderconstruction} />
          </Routes>
          {/* <Bottommenu /> */}
        </div>
      </section>
     
    </>
  );
}

export default App;
