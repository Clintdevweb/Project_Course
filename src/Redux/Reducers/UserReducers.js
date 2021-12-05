import { GET_USER_INFO, LOG_IN, UP_DATE } from "../types/userTypes"

const stateDefault = {
    credentials:{},
    
}

const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOG_IN :{
            state.credentials = action.data
            
            return {...state}
        }

        case UP_DATE :{
            state.credentials = {...state.credentials, ...action.data}
            
            return {...state}
        }
       
        default: return { ...state }
    }
}

export default UserReducer