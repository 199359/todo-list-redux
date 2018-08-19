import React from 'react'
import { connect } from 'react-redux'
import { setLoginStatus, setUser, logOut, logIn } from '../../state/auth'
import {applyMiddleware} from 'redux'



const Auth = (props) => {
    return (
        <div>{props._isLoggedIn
            ?
            <div>
                <p>{'zalogowany: ' + props._userName}</p>
                <button onClick={() => props._logOut()}>Wyloguj</button>
            </div>
            :
            <div>
                <p>Niezalogowany</p>
                <button onClick={props._logIn}>Zaloguj</button>
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
    _userName: state.auth.userName,
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