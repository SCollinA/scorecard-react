import React from 'react'
import {Link} from 'react-router-dom'

export default function Clubhouse({golfState}) {
    return (
        <div className='Clubhouse'>
            <h1>Welcome, {golfState.golfer.name}</h1>
            <Link to='/teetime'><h1>New Tee Time</h1></Link>
        </div>
    )
} 