import React from 'react'

function Head() {
  return (
    <div>
        <h1>Header Part</h1>
        <ul>
            <li>
                <link to={'/'}>Home</link>
               
            </li>
            <link to={'/about-us'}>About</link>
            <li></li>
            <li> <link to={'/contact'}>Contact</link></li>
        </ul>
    </div>
  )
}

export default Head