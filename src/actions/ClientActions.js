import firebase from 'firebase'
import { 
    RESET_CLIENT_INFO,
    FETCH_CLIENT_TODOS,
    FETCH_CLIENT_MATERIALS,
    FETCH_CLIENT_NOTES,
    INPUT_CLIENT_INFO,
    TOGGLE_ACTIVE
} from './types';
import { Actions } from 'react-native-router-flux';


export const inputClientInfo = (field, text) => {
    return {
        type: INPUT_CLIENT_INFO,
        payload: {field, text}
    }
}

export const toggleActive = (type, status,clientId,attributeId) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients/${clientId}/${type}/${attributeId}`)
        .update({completed:status})
    }
}

export const fetchClientTodos = (id) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients/${id}/todo`).on('value',
            (data) => {
                dispatch({
                    type: FETCH_CLIENT_TODOS,
                    payload: data.val()
                })
            }  
        )
    }
}

export const fetchClientMaterials = (id) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients/${id}/material`).on('value',
            (data) => {
                dispatch({
                    type: FETCH_CLIENT_MATERIALS,
                    payload: data.val()
                })
            }  
        )
    }
}

export const fetchClientNotes = (id) => {
    const { currentUser } = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients/${id}/note`).on('value',
            (data) => {
                dispatch({
                    type: FETCH_CLIENT_NOTES,
                    payload: data.val()
                })
            }
        )
    }
}


export const createClientInfo = (type,id,content) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients/${id}/${type}`)
        .push({content, completed:false})
        .then(()=>{
            dispatch({type:RESET_CLIENT_INFO, payload: type})
        })
    }
}

export const deleteClientInfo = (type,clientId,contentId) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients/${clientId}/${type}/${contentId}`)
        .remove()
    }
}

export const patchClientInfo = (clientId,type,typeId,content) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clients/${clientId}/${type}/${typeId}`)
        .update({content})
        .then(()=>{
            dispatch({type:RESET_CLIENT_INFO, payload: type})
        })
    }
}

export const markAsCompleted = (type,id) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser}/clients/${id}/${type}`)
    }
}