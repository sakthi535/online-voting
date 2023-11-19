import React, { useState } from 'react'
import "./Vote.css"
import axios from "axios"

const baseUrl = "https://voting-system-golang.onrender.com"


export const Vote = ({ route, userId }) => {

    
    const [candidate, setCandidate] = useState('');
    
    
    const handleVote = () => {
        const candidateId = new Map([
            ["red", "792aa0e9-3644-4818-a317-97b1a5d78435"],
            ["blue", "fde80f03-f9ef-4a79-8a18-f66e3997a55a"]
        ])
        
        console.log(candidate, ' ', candidateId.get(candidate))
        const data = {
            "UserId" : userId,
            "CandidateId" : candidateId.get(candidate),
            "Timestamp" : new Date().toISOString()
        }
        
        axios.post(baseUrl+'/vote', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => {
            console.log(resp)
            alert("You vote has been submitted");
            route("result");
          })
          .catch((err) => {
            alert('Please try again')
          })



    }

    return (

        <div className="voting-body">
            <div className="voting-container">
                <h1>Vote</h1>
                <p>Make your choice by clicking one of the buttons below.</p>
                <div className="voting-buttons">
                    <button className={"vote-btn red" + (candidate == "red" ? "active" : "")} onClick={() => { setCandidate("red") }}>Red</button>
                    <button className={"vote-btn blue" + (candidate == "blue" ? "active" : "")} onClick={() => { setCandidate("blue") }}>Blue</button>
                </div>

                <div>
                    <button class="login-btn" onClick={() => { handleVote()}}>Submit Vote</button>
                </div>

                <p className="voting-info">Your vote is important. Choose wisely!</p>
                
                <p onClick = {() => {route("welcome")}}>Go Back</p>
                <p className="disclaimer">Disclaimer: This is a simulated voting experience for demonstration purposes only.</p>
            </div>
        </div>

    )
}
