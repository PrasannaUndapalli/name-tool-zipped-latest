import wellslogo from './wellslogo.png';
import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';

import Login from "./components/Login"
import NameTool from "./components/NameTool";

import IconButton from "@material-ui/core/IconButton";
function App() {

  if(!sessionStorage.getItem("username")  || sessionStorage.getItem("username") === "") return (<Login/>);

  return (<>
   { (sessionStorage.getItem("username") && sessionStorage.getItem("username") !== "" ) && (
    <div className="App">
      <header className="App-header">
        <img src={wellslogo} className="logo-icon" alt="Wells Fargo" />
        <div style={{marginRight: 30}}> {sessionStorage.getItem("username").toUpperCase()}</div>
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nametool" element={<NameTool />} />
      </Routes>
      
      <footer role="contentinfo" className="footer-info">
        <nav aria-label="Legal information">
          <ul class="footer__link-list">
            <li>
              <a className="footer__link" href="https://www.wellsfargo.com/privacy-security/?nxnewwindow=true" target="_blank" rel=" noopener noreferrer">
                <span role="text">
                  <span className="button__label">Privacy, Cookies, Security, and Legal</span>
                  <span className="visually-hidden">, opens in a new window</span>
                  <span className="button-simple-link-open-new-window">
                  <IconButton size="small"><OpenInNewOutlinedIcon/></IconButton>
                  </span>
                </span>
              </a>
            </li>
          </ul>
          
        </nav>
        <small className="footer-copyrights"> &copy; 1999 - 2022 Wells Fargo. All rights reserved</small>
        
      </footer>
    </div>)}</>
  );
}

export default App;
