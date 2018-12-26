import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import Gate from './Gate'
import GolfNav from './GolfNav'
import Clubhouse from './Clubhouse'
import RoundForm from './RoundForm'
import GolfAddCourseForm from './GolfAddCourseForm'
import RoundCard from './roundcard/RoundCard';

export default function Golf(props) {
    const {golfState} = props
    const isLoggedIn = golfState.golfer && golfState.golfer._id
    // page is loading
    return (props.isLoading && <LoadingPage />) ||
    // not logged in or at login page
    ((!isLoggedIn && (props.location.pathname !== '/login' && <Redirect to='/login'/>)) ||
    (   <div className="Golf">
            <GolfNav {...props} />
            <Switch>
                <Route exact
                    path="/login"
                    render={routeProps => <Gate history={routeProps.history} loginGolfer={props.loginGolfer} addGolfer={props.addGolfer}/>}
                />
                <Route exact
                    path="/"
                    render={routeProps => <Clubhouse golfState={golfState} />}
                />
                <Route exact
                    path="/teetime"
                    render={routeProps => {
                        return (
                            <RoundForm golfState={golfState} 
                                history={routeProps.history}
                                selectedCourse={props.selectedCourse}
                                selectedGolfers={props.selectedGolfers}
                                selectCourse={props.selectCourse}
                                selectGolfer={props.selectGolfer}
                                courseSearchTerm={props.courseSearchTerm} 
                                golferSearchTerm={props.golferSearchTerm} 
                                updateCourseSearchTerm={props.updateCourseSearchTerm} 
                                updateGolferSearchTerm={props.updateGolferSearchTerm} 
                                addGroup={props.addGroup}
                            />
                        )
                    }} 
                />
                <Route exact
                    path='/addCourse'
                    render={routeProps => {
                        return (
                            <GolfAddCourseForm {...routeProps} addCourse={props.addCourse}/>
                        )
                    }}
                />
                    }
                <Route
                    path='/round/:golfer?'
                    render={routeProps => {
                        return (
                            <RoundCard
                                {...routeProps}
                                currentUser={golfState.golfer}
                                group={golfState.group} 
                                updateHoleScore={props.updateHoleScore}
                                updateCurrentHole={props.updateCurrentHole}
                            />
                        )
                    }}
                />
            </Switch>
        </div>
    ))
}