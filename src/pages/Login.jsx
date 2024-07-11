import React, { useState } from "react";
import styled from "styled-components";
import "./Signup.css"

import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
        <BackgroundImage/>
        <div className="content">
         
          <div className='container'>
            <div className=' head'>
            <h2>Login</h2>
            </div>
            <div className="form">
              <input type="email" placeholder='Email address' onChange={(e)=>setEmail(e.target.value)} name='email' value={email}/>             
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                   setPassword(e.target.value)
                  }
                  name="password"
                  value={password}
                />
            </div>
            
             <button onClick={handleLogin}>login</button> 
             <div className="log">
          <p>DoNot have Account</p>
          <button onClick={()=>navigate("/signup")}>signup</button>

          </div>           
          </div>
        </div>
      </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;

