import React from 'react'
import { Link } from 'react-router-dom'

export default function GolferSearch({searchItems, selectGolfer, golferSearchTerm, updateGolferSearchTerm}) {
    const searchResults = searchItems.filter(searchItem => searchItem.name && searchItem.name.toLowerCase().includes(golferSearchTerm.toLowerCase()))
                .map(searchItem => {
                    return (
                        <h1 key={searchItem.id || searchItem._id}
                        onClick={() => selectGolfer(searchItem)}>
                            {searchItem.name}
                        </h1>
                    )
                })
    return (
        <div className="GolferSearch">
            <label>
                {`golfer search`}
                <input type='text' 
                name={`golferName`} 
                value={golferSearchTerm}
                onChange={event => updateGolferSearchTerm(event.target.value)}/>
            </label>
            {searchResults.length > 0 ? searchResults : <Link to={`/addGolfer`}>add golfer</Link> }
        </div>
    )
}