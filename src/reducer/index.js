import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import ClientsReducer from './ClientsReducer'
import ClientReducer from './ClientReducer'

export default combineReducers({
    auth: AuthReducer,
    clients: ClientsReducer,
    client: ClientReducer
})