import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {MdError} from 'react-icons/md'
import { signInWithEmailAndPassword } from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from "./../../libs/firebase"
import { Label, Input } from "./../../ui/forms";
import { SubmitButton } from "../../ui/buttons";
import {LoginPageStyles, FormControl} from './styles'
 

function LoginPage(props) {
     const navigator = useNavigate()
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")


     const notify = (error) => toast.error(error.code,{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon:<MdError/>

  });


   function onLoginRequest(e){
     e.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then(userCredential=>{
         navigator('/dashboard') 
     })
     .catch(error=>{
       // add toast messages
       notify(error)
     })
  
   }
  return (
    <>
      <LoginPageStyles>
        <ToastContainer/>

        <header>
          <h2>Rise Coffee</h2>
        </header>

        <div class="panel">
			<div>
				<h2 class="title"> Login </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
        <form onSubmit={onLoginRequest}>
          <FormControl className="form-control">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" placeholder="email@email.com" onChange={(e)=> setEmail(e.target.value)}/>
          </FormControl>

          <FormControl className="form-control">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="text" placeholder="**********" onChange={(e)=>setPassword(e.target.value)} />
          </FormControl>
          <FormControl className="form-control">
            <SubmitButton
              type="submit"
              padding="0.88rem"
              margin="1rem 0 0"
              fs="1rem"
            >
              log in to dashboard
            </SubmitButton>
          </FormControl>
        </form>
      </LoginPageStyles>
    </>
  );
}

export default LoginPage;
