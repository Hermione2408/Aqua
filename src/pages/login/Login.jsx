import "./login.scss"

import React, { Component, useState, useEffect, useContext } from "react";
import LoginImage from "../../assets/imgs/loginimage.png"
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/userContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType,SetUserType] = useState('Collector')
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  let userOptions = ['Collector', 'Supervisor', 'Admin', 'User'].map((el)=>{return{
    label:el,
    value:el
  }})
  const onClickLogin = ()=>{
    console.log("Clicked on login")
    let userDetails ={
      email:email,
      userType:userType
    }
    dispatch({type:'SAVE',payload:userDetails})
    localStorage.setItem('userDetails',userDetails)
    navigate('/')

  }
  return (
    <div className="super-container a-flex">
      <div className="image-container">
        <img src={LoginImage} />
      </div>
      <div className="login">
      <div className="login-container a-flex a-fdc">
        <div  className="a-flex a-fdc a-aic">
        <div className='logo a-flex a-aic a-fdc'>
                <div className='outer'>
                    <div className='inner'>

                    </div>
                </div>
                <div className='text a-flex'>
                    <p style={{color:'#8FE3CF'}}>Aqua</p>
                    <p style={{color:'#000000'}}>Map</p>
                </div>
            </div>
        <div className="heading">Login</div>
        <div className="subheading">Enter your email and password below</div>
        </div>
        <div className="a-flex a-fdc">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password a-flex a-fdc  ">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-16">
          <Select options={userOptions} onChange={(val)=>SetUserType(val.label)} />
        </div>

        <button onClick={()=>onClickLogin()}>Login</button>
        <div className="having-issues">Having issues?</div>
      </div>
      </div>
    </div>
  );
}

export default Login;
