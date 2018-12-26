import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseSearch({searchItems, selectCourse, courseSearchTerm, updateCourseSearchTerm}) {
    const searchResults = searchItems.filter(searchItem => searchItem.name && searchItem.name.toLowerCase().includes(courseSearchTerm.toLowerCase()))
                .map(searchItem => {
                    return (
                        <h1 key={searchItem.id || searchItem._id}
                        onClick={() => selectCourse(searchItem)}>{searchItem.name}</h1>
                    )
                })
    return (
        <div className="CourseSearch">
            <label>
                {`course search`}
                <input type='text' 
                name={`courseName`} 
                value={courseSearchTerm}
                onChange={event => updateCourseSearchTerm(event.target.value)}/>
            </label>
            {searchResults.length > 0 ? searchResults : <Link to={`/addCourse`}>add course</Link> }
        </div>
    )
}