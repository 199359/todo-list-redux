import React from 'react'
import { connect } from 'react-redux'


const Auth = (props) => {
    return(
    <div>{props._isLoggedIn ? 'zalogowany: ' + props._userName : 'nie zalogowany'}</div>
    )}


const mapStateToProps = (state) => ({
    _isLoggedIn: state.auth.isLoggedIn,
    _userName: state.auth.userName
})

export default connect(mapStateToProps)(Auth)