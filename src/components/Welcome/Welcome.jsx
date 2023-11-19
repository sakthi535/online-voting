import React, { useState } from 'react'
import './Welcome.css'

import { Vote } from '../Vote/Vote';
import { Login } from '../Login/Login';
import { Result } from '../Result/Result';

export const Welcome = () => {

    const [screen, setScreen] = useState("welcome");
    const [userId, setUserId] = useState('');


    switch(screen){
        case "login":
            return <Login route = {(val) => {setScreen(val);}} setUserId = {(userId) => {setUserId(userId)}}/>
        case "vote":
            return <Vote route = {(val) => {setScreen(val);}} userId = {userId}/>
        case "result":
            return <Result route = {(val) => {setScreen(val);}} result = {screen}/>
    }

    
    return (
        
        <div class="welcome-body">
            <div class="container">
                <h1>Welcome!</h1>
                <p>We're excited to have you here.</p>
            
                <button class="signin-btn" onClick={() => {setScreen("login");}}>Sign In</button>
                <p class="continue-link" >Please go through online authentication for voting process</p>
            
                <br />
                <br />
                <button class="signin-btn" onClick={() => {setScreen("result");}}>Check Results</button>

            </div>
        </div>
    )
}
