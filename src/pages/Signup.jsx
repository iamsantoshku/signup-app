import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import './Signup.css'
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import styled from "styled-components";
  import BackgroundImage from "../components/BackgroundImage";
  
  import { firebaseAuth } from "../utils/firebase-config";
 
  
  const Signup = () => {
   
    const [formValues, setFormValues] = useState({
      name:"",
      email: "",
      password: "",
    });
    const navigate = useNavigate();
    const handleSignIn = async () => {
      try {
        const { email, password } = formValues;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
        console.log(error);
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
            <h2>Create An Account</h2>
            </div>
            <div className="form">
              {/* <label htmlFor="">Enter Name</label> */}
              <input type="text" placeholder="Enter name" onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value,})} name='name' value={formValues.name}></input>
              <input type="email" placeholder='Email address' onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value,})} name='email' value={formValues.email}/>             
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="password"
                  value={formValues.password}
                />
            </div>
            
             <button  onClick={handleSignIn}>Create New Account</button>

             
             <div className="log">
          <p>Allready have Account</p>
          <button onClick={()=>navigate("/login")}>login</button>

          </div>
          </div>
          
          
          
        </div>
      </Container>
    )
  }

  const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
          
        }
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
`;
export default Signup
