import React, {useState} from 'react'
import "./Login.css"
import axios from "axios"

const baseUrl = "https://voting-system-golang.onrender.com"

export const Login = ({ route, setUserId }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = (e) => {
    e.preventDefault();

    const data = {
      "username" : username,
      "password" : password
    }

    axios.post(baseUrl+'/login', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((resp) => {
      alert('Password matched, proceed to vote')
      setUserId(resp.data.User_Id)
      route('vote')
    })
    .catch((err) => {
      alert('Incorrect password')
    })

  }

  return (
    <div class="login-body">
      <div class="login-container">
        <h1>Login</h1>
        <form>
          <input type="numeric" placeholder="Aadhaar Number" class="login-input" required onChange={(e) => {setUsername(e.target.value)}}/>
          <input type="password" placeholder="Password" class="login-input" required onChange={(e) => {setPassword(e.target.value)}}/>
          <button class="login-btn" onClick={(e) => { validateLogin(e); }}>Login</button>
        </form>
        <p class="continue-link" onClick={() => { route("welcome"); }}>Continue without login</p>
      </div>
    </div>

  )
}
