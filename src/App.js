import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import './App.css';
import Home from './Home';
import {auth, provider} from "./Config"
import { signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const handleClick=()=>{
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
  }
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Signup/>
      <Routes>
            <Route exact path="home" element={<Home key="home" />}></Route>
            <Route exact path="signup" element={<Signup key="signup" />}></Route>
            <Route exact path="login" element={<Login key="login" />}></Route>
            </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
