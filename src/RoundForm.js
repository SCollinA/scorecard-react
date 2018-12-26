import React from 'react'
import CourseSearch from './CourseSearch'
import GolferSearch from './GolferSearch'

export default function RoundForm({selectedCourse, selectedGolfers, selectCourse, selectGolfer, golfState, courseSearchTerm, golferSearchTerm, updateCourseSearchTerm, updateGolferSearchTerm, addGroup}) {
    return (
        <div className="RoundForm">
            <div className="chooseCourseForm">
                <CourseSearch
                    searchItems={(!courseSearchTerm && (selectedCourse._id && [selectedCourse])) || golfState.courses}
                    selectCourse={selectCourse} 
                    courseSearchTerm={courseSearchTerm}
                    updateCourseSearchTerm={updateCourseSearchTerm}
                />
            </div>
            <div className="chooseGolfersForm">
                <GolferSearch
                    searchItems={[...selectedGolfers, ...golfState.golfers]} 
                    selectGolfer={selectGolfer}
                    golferSearchTerm={golferSearchTerm}
                    updateGolferSearchTerm={updateGolferSearchTerm}
                />
            </div>
            <button onClick={() => addGroup({course: golfState.courses[0], golfers: [golfState.golfer]})}>tee off</button>
        </div>
    )
} 