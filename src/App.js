import React from "react";
import "./style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

export default function App() {

    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/signin"} element={<Signin />} />
            </Routes>
        </Router>
     );
}

