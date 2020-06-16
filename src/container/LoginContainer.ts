import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../reducers/rootReducer'
import { changeEmail, changePassword, submitLogin } from "../actions/authAction"
import Login from "../components/LoginPage"

export interface LoginHandler {
  changeEmail(email: string): Function
  changePassword(password: string): Function
  handlelogin({ email, password }: { email: string, password: string }): Function
}

const mapStateToProps = (state: State) => {
  return {
    email: state.authState.email,
    password: state.authState.password,
    loading: state.authState.loading,
    loggedIn: state.authState.loggedIn
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    handleLogin: submitLogin,
    changeEmail: changeEmail,
    changePassword: changePassword
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)