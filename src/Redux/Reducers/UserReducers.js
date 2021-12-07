import { GET_MY_COURSE, GET_USER_INFO, LOG_IN, UP_DATE } from "../types/userTypes"

const stateDefault = {
    credentials:{},
    myCourseDetail: [],
    
}

const UserReducer = (state = stateDefault, action) => {
    // console.log(state.myCourseDetail)
    switch (action.type) {
        case LOG_IN :{
            state.credentials = {...state.credentials, ...action.data}
            
            return {...state}
        }

        case UP_DATE :{
            state.credentials = {...state.credentials, ...action.data}
            
            return {...state}
        }

        case GET_MY_COURSE :{
            return {
                ...state,
                myCourseDetail: action.data
            }
        }
       
        default: return { ...state }
    }
}

export default UserReducer