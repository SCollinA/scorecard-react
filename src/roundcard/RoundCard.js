import React from 'react'
import { Route } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import GolferCard from './GolferCard'

export default function RoundCard({currentUser, group, updateHoleScore, updateCurrentHole}) {
    return (
        <div className="RoundCard">
            <Route exact path='/round'
            render={routeProps => {
                return (
                    <Leaderboard group={group}/>
                )
            }}/>
            {group.golfers.map(golfer => {
                return (
                    <Route key={golfer._id}
                        exact path={`/round/${golfer.name}`}
                        render={routeProps => {
                            return (
                                <GolferCard key={golfer._id} 
                                    golfer={golfer}
                                    currentHole={group.hole}
                                    updateHoleScore={updateHoleScore}
                                    updateCurrentHole={updateCurrentHole}
                                    isCurrentUser={currentUser._id === golfer._id}
                                />
                            )
                        }}
                    />
                )
            })}
        </div>  
    )
}  