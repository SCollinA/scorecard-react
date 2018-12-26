import React from 'react'
import CourseSearch from './CourseSearch'
import GolferSearch from './GolferSearch'

export default function RoundForm({golfState, courseSearchTerm, golferSearchTerm, updateCourseSearchTerm, updateGolferSearchTerm, addGroup}) {
    return (
        <div className="RoundForm">
            <div className="chooseCourseForm">
                <CourseSearch type='Course'
                    searchItems={golfState.courses} 
                    courseSearchTerm={courseSearchTerm}
                    updateCourseSearchTerm={updateCourseSearchTerm}
                />
            </div>
            <div className="chooseGolfersForm">
                <GolferSearch type='Golfer'
                    searchItems={golfState.golfers} 
                    golferSearchTerm={golferSearchTerm}
                    updateGolferSearchTerm={updateGolferSearchTerm}
                />
            </div>
            <button onClick={() => addGroup({course: golfState.courses[0], golfers: [golfState.golfer]})}>tee off</button>
        </div>
    )
} 