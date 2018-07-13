import {
    ON_TEXT_CHANGE,
    LOGIN,
    SIGNUP,
    LOADING,
    USER_INFO,
    LOGOUT_USER
} from '../actions/types'

const INIT = {email:"", password:"", error:'', loading:false}

export default (state=INIT, action) => {
    switch(action.type) {
        case ON_TEXT_CHANGE:
            return { ...state, [action.payload.field]: action.payload.text}
        case LOGOUT_USER:
            return INIT
        case LOGIN:
            return { ...state, error:action.payload, loading:false }
        case SIGNUP:
            return { ...state, error:action.payload, loading:false }
        case LOADING:
            return { ...state, loading:true }           
        default:
            return state
    }

}