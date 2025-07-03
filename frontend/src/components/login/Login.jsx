import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { Submit } from "../Submit/Submit";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';


function Login({leftimg, logo, line1, line2, paragraph}){


    //javascript-------------------------------------------------------------
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [LoginState, setLoginState] = useState("")
    const [show, setShow] = useState(false);
    

    
    
    const forgetPasswords = ()=>{
        navigate("/auth/forget-password")
    }
    
    const passwordToggle = ()=>{
        setShow(!show)
    }
    
    //Notifications
    
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
    function wrongCredentials(){
        toast.error('Wrong credentials', {
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
    function serverError(){
        toast.error('Internal Server Error', {
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
    
    
    function success() {
        toast.success('Login Succesfully', {
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
    const loginCredentials = async (e)=>{
    
                   
                    axios.post(`${process.env.REACT_APP_DOMAIN}/auth/login`,{
                        email: email,
                        password: password,
                        
                    } , {withCredentials:true}).then((res)=>{ 
                        if(res.status === 401){
                            wrongCredentials();
                        }
                        else if(res.status === 500){
                            console.log("error here")
                            serverError();
                        }
                        else{
                            console.log(res.status) 
                            const changeState = async()=>{

                                console.log("before : " + LoginState)
                                setLoginState("200");
                                console.log(LoginState)
                                const token = Cookies.get('token')
                                // console.log("cookies token : " + Cookies.get('token'))
                                navigate(`/account/${token}`)
                                // navigate(`/waitlist`)
                                
                            }
                            changeState();
                        }
                        
                    }).catch((err)=>{
                        if(err){
                            console.log("Login failed code " + err)
                            serverError();
                            navigate("/auth/login")
                        }
                    })
                
    e.preventDefault();
    console.log("button pressed")
    
}


const [cookies, setCookie, removeCookie] = useCookies(['token']);

const token = Cookies.get('token')

useEffect(()=>{
    const token = Cookies.get('token')
    
    if(token){

        navigate(`/account/${token}`);
        // navigate(`/waitlist`)
    }
}, [Cookies, navigate])



  
    
    let allFieldsFill = (e)=>{
        return  password.trim() !== "" && email.trim() !== "";
    }
    //-----------------------------------------------------------------------------------
    
    
    
       
    //call
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
    
    
        <label htmlFor="email" >Email</label>
        <input type="email" name = "email" placeholder="Enter Email Here" className="inp emailinp" onChange={(e)=>{setEmail(e.target.value)}}/>
    
    
        <label htmlFor="password" >Password</label>
        <div className="pas">
    
        <input type={show?"text" : "password"} name="password" placeholder="Enter Password Here" className="inp pasinp" onChange={(e)=>{setPassword(e.target.value)}}/>
        <p onClick={passwordToggle}>{show?"hide":"show"}</p>
        </div>
        <p className="forgot" onClick={forgetPasswords}>Forgot Password</p>
    
    
        <div className="btnbox">
            
            <Link to="/signup" className="noaccount">
        {/* <Submit btn1text={"SignUp"}/> */}
        <p className="signupText">don't have an account</p>
            </Link>
    

            <form method = 'POST'>
            <input type="submit" disabled={!allFieldsFill()} onClick={loginCredentials} value="Login" className="btn"/>
            
            </form>



        </div>
    </div>
        </div>
        </div>
        <ToastContainer/>
        </>
    );
    }
    
    export {Login}






// import React from 'react'

// function Login() {
//   return (
//     <div>
//       hiii
//     </div>
//   )
// }

// export {Login}
