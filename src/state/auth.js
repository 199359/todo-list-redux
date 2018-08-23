import firebase, { auth, googleProvider } from '../firebaseConfig'

const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'
const SET_USER = 'SET_USER'
const LOG_OUT = 'LOG_OUT'

export const setLoginStatus = () => ({ type: SET_LOGIN_STATUS })
export const setUser = (user) => ({type: SET_USER, user: user})
export const logOut = () => ({type: LOG_OUT})

export const logIn = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
    .then(data => {dispatch(setUser(data.user.toJSON()))
        dispatch(setLoginStatus())
    })
}


const initialState = {
    isLoggedIn: false,
    userName: 'Krzysztof Krawczyk',
    signInFlow: 'popup',
    signInOption: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    callbacks: {signInSuccess: ()=> false},
    user: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOGIN_STATUS:
        return {
            ...state,
            isLoggedIn: !state.isLoggedIn
        }
        case SET_USER:
        return {
            ...state,
            user: action.user
        }
        case LOG_OUT:
        return {
            ...state,
            isLoggedIn: false,
            user: {displayName: ''}
        }
        default: state
    }
    return state
}

export default reducer