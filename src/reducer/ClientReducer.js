import {
    FETCH_CLIENT_TODOS,
    INPUT_CLIENT_INFO,
    FETCH_CLIENT_MATERIALS,
    FETCH_CLIENT_NOTES,
    TOGGLE_ACTIVE,
    RESET_CLIENT_INFO
} from '../actions/types'

const INIT = {todos: {}, todo:'', materials:{}, material:'', notes: {}, note:"", client:{}}

export default (state=INIT, action) => {
    switch(action.type){
        case FETCH_CLIENT_TODOS:
            return { ...state, todos: action.payload }
        case FETCH_CLIENT_MATERIALS:
            return { ...state, materials: action.payload }
        case FETCH_CLIENT_NOTES:
            return { ...state, notes: action.payload }
        case INPUT_CLIENT_INFO:
            return { ...state, [action.payload.field]: action.payload.text }
        case RESET_CLIENT_INFO:
            return { ...state, [action.payload]: '' }
        default:
            return state
    }
}