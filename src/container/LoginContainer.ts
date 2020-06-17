import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../reducers/rootReducer'
import { googleLogin } from "../actions/authAction"
import Login from "../components/pages/LoginPage"

export interface LoginHandler {
  googleLogin(): Function,
  googleUser: any
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
