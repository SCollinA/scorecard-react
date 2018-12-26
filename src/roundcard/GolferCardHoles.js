import React from 'react'
import GolferCardHole from './GolferCardHole'

export default function GolferCardHoles({holeScores, startHoleNum, endHoleNum, currentHole, updateCurrentHole, updateHoleScore, isCurrentUser}) {
    return (
        <div className='GolferCardHoles'>
            {holeScores.slice(startHoleNum, endHoleNum)
                .map(holeScore => {
                    return (
                        <GolferCardHole key={holeScore._id}
                            holeScore={holeScore}
                            currentHole={holeScore.hole._id === currentHole._id}
                            updateCurrentHole={updateCurrentHole}
                            updateHoleScore={updateHoleScore}
                            isCurrentUser={isCurrentUser}
                        />
                    )
                })
            }
        </div>
    )
}