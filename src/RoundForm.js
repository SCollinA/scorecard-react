import React from 'react'
import CourseSearch from './CourseSearch'
import GolferSearch from './GolferSearch'

export default function RoundForm({selectedCourse, selectedGolfers, selectCourse, selectGolfer, golfState, courseSearchTerm, golferSearchTerm, updateCourseSearchTerm, updateGolferSearchTerm, addGroup}) {
    return (
        <div className="RoundForm">
            <div className="chooseCourseForm">
                <ul>
                    <li>{selectedCourse.name}</li>
                </ul>
                <CourseSearch
                    searchItems={golfState.courses.filter(course => course._id !== selectedCourse._id)}
                    selectCourse={selectCourse} 
                    courseSearchTerm={courseSearchTerm}
                    updateCourseSearchTerm={updateCourseSearchTerm}
                />
            </div>
            <div className="chooseGolfersForm">
                <ul>
                    {selectedGolfers.map(golfer => <li key={golfer._id}>{golfer.name}</li>)}
                </ul>
                <GolferSearch
                    searchItems={golfState.golfers.filter(golfer => !selectedGolfers.map(sg => sg._id).includes(golfer._id))} 
                    selectGolfer={selectGolfer}
                    golferSearchTerm={golferSearchTerm}
                    updateGolferSearchTerm={updateGolferSearchTerm}
                />
            </div>
            <button onClick={() => addGroup({course: golfState.courses[0], golfers: [golfState.golfer]})}>tee off</button>
        </div>
    )
} 