import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "../src/pages/student/Home.jsx";
import Courselist from "./pages/student/Courselist.jsx";
import Cousedetails from "./pages/student/Cousedetails.jsx";
import Myenrollments from "./pages/student/Myenrollments.jsx";
import Player from "./pages/student/Player.jsx";
import Loading from "./components/student/Loading.jsx"
import Educator from "./pages/educator/Educator.jsx"
import Dashboard from "./pages/educator/Dashboard.jsx"
import Mycourses from "./pages/educator/Mycourses.jsx"
import StudentsEnrollment from "./pages/educator/StudentsEnrollment.jsx"
import Addcourses from "./pages/educator/Addcourses.jsx"
import Navbar from "./components/student/Navbar.jsx";
const App = () => {
const isEducator = useMatch('/educator/*')

  return (
    <div className="text-default h-dvh min-h-screen flex-col flex bg-white">
      {!isEducator && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<Courselist />} />
        <Route path="/course-list/:input" element={<Courselist />} />
        <Route path="/course/:id" element={<Cousedetails />} />
        <Route path="/my-enrollments" element={<Myenrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
         <Route path="/loading/:path" element={<Loading />} />

         <Route path="/educator" element={<Educator />} >
         <Route path="educator" element={<Dashboard />} />
           <Route path="add-course" element={<Addcourses />} />
           <Route path="my-course" element={<Mycourses />} />
           <Route path="student-enrolled" element={<StudentsEnrollment />} />
         </Route>
      </Routes>
    </div>
  );
};

export default App;
