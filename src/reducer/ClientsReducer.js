import {
    ADD_INITIALS,
    ADD_CLIENT,
    FETCH_CLIENTS
} from '../actions/types'

const INIT = {initials:"", add:false, clients: {}}

export default (state=INIT, action) => {
    switch(action.type){
        case FETCH_CLIENTS:
            return { ...state, clients: action.payload }
        case ADD_INITIALS:
            return { ...state, initials: action.payload }
        case ADD_CLIENT:
            return { ...state, initials:"", add:false }
        default:
            return state
    }
}