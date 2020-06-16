import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../reducers/rootReducer'
import { googleLogin } from "../actions/authAction"
import Login from "../components/LoginPage"

export interface LoginHandler {
  googleLogin(): Function
}

const mapStateToProps = (state: State) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    googleLogin: googleLogin
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
