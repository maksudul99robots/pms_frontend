// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from "next/link";
import {React, useEffect, useState} from "react"
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Router from 'next/router'

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [reload, setReload] = useState(false);

    const handleUserChange = (name) => {
        setUserName(name)
    }
    const handlePassChange = (pass) => {
        // console.log(pass);
        setPassword(pass);
    }
    const handleSubmit = () => {
        console.log(username);
        console.log(password);
        axios.post('http://localhost:5000/auth/login', {
            email: username,
            password: password
          },{headers: {"Access-Control-Allow-Origin": "*"}})
          .then(function (response) {
            // console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            setReload(!reload);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            Router.push('/')
        }
    })




  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center" >
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Your Company Logo</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2 className="pt-3">Log In</h2>
					</div>
					<div className="row">
						<form className="form-group">
							<div className="row">
								<input type="text" name="username" id="username" className="form__input" placeholder="Username" onChange={(e)=>handleUserChange(e.target.value)}/>
							</div>
							<div className="row">
								{/* <!-- <span className="fa fa-lock"></span> --> */}
								<input type="password" name="password" id="password" className="form__input" placeholder="Password" onChange={(e)=>handlePassChange(e.target.value)}/>
							</div>
							<div className="row">
								<input type="checkbox" name="remember_me" id="remember_me" className=""/>
								<label for="remember_me">Remember Me!</label>
							</div>
							<div className="row">
								<input type="button" value="Submit" className="btn"  onClick={handleSubmit}/>
							</div>
						</form>
					</div>
					<div className="row">
						<p>Don't have an account? <Link href="/register"><a href="#">Register Here</a></Link></p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}