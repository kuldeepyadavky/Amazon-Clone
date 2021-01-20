import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = (e) => {
		e.preventDefault()

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/')
			})
			.catch((error) => alert(error.message))
	}

	const register = (e) => {
		e.preventDefault()

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push('/')
				}
			})
			.catch((error) => alert(error.message))
	}

	return (
		<div className='login'>
			<Link to='/'>
				<img className='login_logo' src='img/login_logo.png' alt='Login Logo' />
			</Link>

			<div className='logo_container'>
				<h1>Sign-In</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail((e) => setEmail(e.target.value))}
					/>
					<button type='submit' onClick={signIn} className='signInButton'>
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>

				<button onClick={register} className='registerButton'>
					Create your Amazon Account
				</button>
			</div>
		</div>
	)
}

export default Login
