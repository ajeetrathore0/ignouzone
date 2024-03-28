import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Bottommenu from "./assets/componants/bottommenu";
import "./assets/style/main.css";
import "./assets/style/style.css";
import "./assets/style/mobile-500.css";
import "./assets/style/animation.css";

import Topmenu from "./assets/componants/topmenu";
import More from "./assets/componants/more";
import Home from "./assets/componants/home";
import Assignment, { Checkurl } from "./assets/componants/assignment";
import Services from "./assets/componants/services";
import Gradecard from "./assets/componants/gradecard";
import Assignmentstatus from "./assets/componants/assignmentstatus";
import pageisunderconstruction from "./assets/componants/underconstruction";
import { DownloadAssignment } from "./assets/componants/downloadassignment";
import Pyp from "./assets/componants/pyp";
function App() {
  return (
    <>
      <Topmenu />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/more" Component={More}></Route>
        <Route path="/assignment" Component={Assignment}></Route>
        <Route path="/assignment/:id" Component={Checkurl}></Route>
        <Route path="/assignment/:id/:id" Component={DownloadAssignment}></Route>
        <Route path="/services" Component={Services}></Route>
        <Route path="/services/gradecard" Component={Gradecard}></Route>
        <Route path="/previousyearpaper" Component={Pyp}></Route>
        <Route
          path="/services/assignmentstatus"
          Component={Assignmentstatus}
        ></Route>
      </Routes>
      <Bottommenu />
    </>
  );
}

export default App;
