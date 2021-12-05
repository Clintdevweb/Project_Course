import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import CourseReducer from './Course'
import UserReducer from './UserReducers'

const rootReducer = combineReducers({
     CourseReducer,
     UserReducer:UserReducer
})

export const store =createStore( rootReducer, applyMiddleware(thunk))