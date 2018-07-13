import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    ADD_INITIALS,
    ADD_CLIENT,
    FETCH_CLIENTS
} from './types'

export const addClient = client => {
    const {currentUser} = firebase.auth()

    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients`)
        .push({client})
        .then(() => {
            dispatch({type: ADD_CLIENT})
            //Actions.client()
        })   
    }
}

export const addInitials = initials => {
    return {
        type: ADD_INITIALS,
        payload: initials
    }
}

export const fetchClients = () => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients`).on('value',
            (data) => {
                dispatch({
                    type: FETCH_CLIENTS,
                    payload: data.val()
                })
            }  
        )
    }
}