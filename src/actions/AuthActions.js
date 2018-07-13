import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    ON_TEXT_CHANGE,
    LOGIN,
    SIGNUP,
    LOADING,
    LOGOUT_USER
} from './types'

export const userLoggedIn = () => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                Actions.clients()
            } else {
                Actions.initialScreen()
            }
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then(user=> {
            dispatch({ type: LOGOUT_USER })
            Actions.initialScreen()
        })
    }
}

export const onLoginPress = (email,password) => {
    return (dispatch) => {
        dispatch({type: LOADING})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( (user) =>{
                dispatch({
                    type: LOGIN,
                    payload: ""
                }),
                Actions.clients()
            }
        )
        .catch((error)=>{
            dispatch({
                type: LOGIN,
                payload: `Authentication Failed. ${error.message}`
            })
        })
    }
}

export const onSignUpPress = (email,password) => {
    return (dispatch) => {
        dispatch({type: LOADING})
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( (user) =>{ 
                dispatch({
                    type: SIGNUP,
                    payload: ""
                }),
                Actions.clients()
            }
        )
        .catch((error)=>{
            dispatch({
                type: SIGNUP,
                payload: `Authentication Failed. ${error.message}`
            })
        })
    } 
}

export const onTextChange = (text,field) => {
    return{
        payload: {text,field},
        type: ON_TEXT_CHANGE
    }
}