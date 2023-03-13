import React from "react";
import "./home.css";



import { Link } from "react-router-dom";
import AIWriter from "react-aiwriter";

export default function Home() {
  const handleClick=()=>{
    localStorage.clear()
    window.location.reload()
}
  return (

  
    <>
      

      
      {/* <div className="">
          <img className="graphic rounded img-fluid" src={graphic} alt="" />
        </div> */}
      <div className="main mb-5">
        <div className="row d-flex mx-auto mt-5">
          <div className="text px-5">
            <div className="codebird">
              <h1 className="text-brown main-head" >
                <span style={{color:"#925000"}}>
                My<span className="text-warning" style={{color:"#F4D65E"}}>A</span><span className="text-warning">pp</span>
                
                </span>
                
              </h1>
            </div>
            <div className="sub-text my-5">
              <AIWriter delay={125}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
              </AIWriter>
            </div>
            <div className="">
            <a href="https://www.linkedin.com/in/sanjibkumardas-webdev/" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="btn btn-warning text-dark btn-sm mb-5"
                style={{backgroundColor:"#925000"}}
              >
                <i className="fab fa-linkedin fa-flip text-light"></i> <span style={{color:"#F4D65E"}}>Connect with me</span> 
              </button>
            </a></div> 
            <button className='btn btn-warning' onClick={handleClick}>Logout </button>
          </div>
         
            
            
          </div>
        </div>
       
      
    </>
  );
}
