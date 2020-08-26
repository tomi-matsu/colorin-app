import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../reducers/rootReducer'
// import { googleLogin } from "../actions/authAction"
import App from "../App"

export interface AppHandler {
  // googleLogin(): Function,
  isLogin: boolean,
  googleUser: {
    displayName: string,
    email: string,
    photoURL: string,
    refreshToken: string,
    uid: string
  }
}

const mapStateToProps = (state: State) => {
  return {
    isLogin: state.authState.isLogin,
    googleUser: state.authState.googleUser
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    // googleLogin: googleLogin
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
