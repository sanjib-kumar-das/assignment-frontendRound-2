
import React, { useEffect, useState } from 'react'
import Home from './Home'
import {auth, provider} from "./Config"
import { signInWithPopup } from 'firebase/auth'
function Login() {
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
    <>{value?<Home/>:
    <div>
      <form className='container w-50 card mt-5'>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4 mt-5">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>
 {/* <!-- Confirm Password input --> */}
 {/* <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Confirm Password</label>
  </div> */}
  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      {/* <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div> */}
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      {/* <a href="#!">Forgot password?</a> */}
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4 w-25" style={{marginLeft:"17rem"}}>Login</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>Not a member? <a href="/signup">Sign Up</a></p>
    <p>or login with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google" onClick={handleClick}></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
    </div>
}</>
  )
}

export default Login
