import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../reducers/rootReducer'
import { googleLogin } from "../actions/authAction"
import Login from "../components/pages/LoginPage"

export interface LoginHandler {
  googleLogin(): Function,
  googleUser: {
    displayName: String | null,
    email: String | null,
    photoURL: String | null,
    refreshToken: String | null,
    uid: String | null
  }
}

const mapStateToProps = (state: State) => {
  return {
    googleUser: state.authState.googleUser
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    googleLogin: googleLogin
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
