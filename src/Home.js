import React from 'react'
import data from './data.js'
import "./App.css"

function Home({ data }) {
    return (
        <div>
          <h2>Popular collection</h2>

          {data.map(({homeImg}) => (
            <img className="img___home" src={homeImg}></img>
          ))}
        </div>
    )
}

export default Home
