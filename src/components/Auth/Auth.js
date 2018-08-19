import React from 'react'
import { connect } from 'react-redux'
import { setLoginStatus, setUser, logOut, logIn } from '../../state/auth'
import {applyMiddleware} from 'redux'



const Auth = (props) => {
    return (
        <div>{props._isLoggedIn
            ?
            <div>
                <p>{'Witaj ' + props._userName + '!'}</p>
                <button onClick={() => props._logOut()}>Wyloguj</button>
                {console.log(props._userName)}
            </div>
            :
            <div>
                <p>Zaloguj się, aby wyświetlić swoje zadania</p>
                <button onClick={props._logIn}>Zaloguj za pomocą konta Google</button>
            </div>
        }
        </div>
    )
}

const logger = () => {
    console.log()
}

export const middleware = () => {
    applyMiddleware(logger)
}


const mapStateToProps = (state) => ({
    _isLoggedIn: state.auth.isLoggedIn,
    _userName: state.auth.user.displayName,
    _signInFlow: state.auth.signInFlow,
    _signInOption: state.auth.signInOption,
    _callbacks: state.auth.callbacks
})

const mapDispatchToProps = (dispatch) => ({
    _setLoginStatus: () => dispatch(setLoginStatus()),
    _setUser: (result) => dispatch(setUser(result)),
    _logOut: () => dispatch(logOut()),
    _logIn: () => dispatch(logIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)