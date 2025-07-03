import React from "react";
// import style from "./login.css"
import "./login.css"
import { useState } from "react";
import {Submit} from "../Submit/Submit"
import { Link, useNavigate } from "react-router-dom";
import  axios  from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Submit/Submit.css"
import Cookies from 'js-cookie';







function Signup({leftimg, logo, line1, line2, paragraph}){




    
//javascript

const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
const [signup, setSignup] = useState("")
//call

function passwordError(){
    toast.error('Password must be greater than 8 characters', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
        });
}
function userAlreadyExist(){
    toast.error('User already exists', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
        });
}


function sucess() {
    toast.success('Signup Succesfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
        });
};
const navigate = useNavigate();

const register = (e)=>{
    if(password.length<8){
        passwordError();
        return 0;
    }
    // sucess();

    axios.post(`${process.env.REACT_APP_DOMAIN}/signup`,{
        email,
        password,
        username: name
                
    } , {withCredentials: true}).then((res)=>{
        if(res.data.message){
            setSignup(res.data.message)
        }
        else if(res.data.error == 1062){
            userAlreadyExist();
        }
        else{
            const token = Cookies.get('token');
            setSignup("Account created successfully")
            navigate(`/waitlist`);
            // navigate(`/account/${token}`);
        }
    })
e.preventDefault();


}


//Checking if fields are filled
let allFieldsFill = (e)=>{
   
   
    return name.trim() !== "" && password.trim() !== "" && email.trim() !== "";
}




return(
    <>
    <div className="main">

<div className="left">
<div className="leftimg"><img src="./loginPage.png" alt="" /></div>
<div className="head">
    <h1>{line1}</h1>
    <br />
    <h1>{line2}</h1>
    <br />
    <p>{paragraph}</p>
</div>
</div>


    <div className="right">
<div className="loginbox">
    <img src="../../../images/logolight.png" alt="" className="logoimg" />
<div className="logo"></div>


    <label htmlFor="username">Username</label>
    <input type="text" placeholder="Enter Full Name" className="inp emailinp txt" autoComplete="on" onChange={(e)=>{setName(e.target.value)}}/>


    <label htmlFor="email">Email</label>
    <input type="email" placeholder="Enter Email Here" className="inp email" autoComplete="on" onChange={(e)=>{setEmail(e.target.value)}}/>


    <label htmlFor="password" >Password</label>
    <input type="password" placeholder="Enter Password Here" className="inp" autoComplete="on" onChange={(e)=>{setPassword(e.target.value)}}/>

   

    <div className="btnbox">
    <Link to="/login" className="noaccount">
    {/* <Submit btn1text={"Login"}  /> */}
    <p className="signupText">already have an account</p>
        </Link>


        {/* <Link to="/auth/signup"> */}
        <input 
  type="submit" 
  disabled={!allFieldsFill()} 
  onClick={register}  
  value="Signup" 
  className="btn"
/>


    </div>
</div>
    </div>
    </div>
    <ToastContainer />
    </>
);
}

export {Signup}