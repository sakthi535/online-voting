import React, { useEffect, useState } from 'react'
import "./Result.css"
import axios from "axios"
const baseUrl = "https://voting-system-golang.onrender.com"

export const Result = ({ route, result }) => {

  const [votes, setVotes] = useState([100, 100]);

  useEffect(() => {
    axios.get(baseUrl + '/vote', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((resp) => {
        console.log(resp.data)
        setVotes([resp.data[0], resp.data[1]])
      })
      .catch((err) => {
        alert('Please try again')
      })
  }, [])

  const click = () => {
    console.log(votes);
  }


  return (

    <body class="voting-body">
      <div class="voting-container">
        <h1>Results</h1>
        <p>Below are the current voting results for each candidates.</p>
        <div class="result-buttons">
          <button class="result-btn red" onClick={() => { click(); }}>
            <div>
              Red
            </div>
            <div style={{ "padding-top": "12px", "pointerEvents": "disable" }}>
              {(votes[0]*100/(votes[0]+votes[1])).toFixed(2)}%
            </div>
          </button>
          <button class="result-btn blue">
            <div>
              Blue
            </div>
            <div style={{ "padding-top": "12px" }}>
              {(votes[1]*100/(votes[0]+votes[1])).toFixed(2)}%
            </div>
          </button>
        </div>


        <p class="voting-info">Your vote is important. Choose wisely!</p>

        <p onClick={() => { route("welcome") }}>Go Back</p>
        <p class="disclaimer">Disclaimer: This is a simulated voting experience for demonstration purposes only.</p>
      </div>
    </body>

  )
}
