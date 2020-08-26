import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../reducers/rootReducer'
import Account from "../components/pages/AccountPage"

export interface AccountHandler {
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
    googleUser: state.authState.googleUser
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    // handleGetItems: getItems,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)