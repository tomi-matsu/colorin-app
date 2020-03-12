import { connect } from "react-redux"
// import { Dispatch } from 'redux'
import { bindActionCreators, Dispatch } from 'redux';

// import { Dispatch, createStore, applyMiddleware } from 'redux'
// import store from '../index'
// import thunk from 'redux-thunk'
// import rootReducer from '../reducers/rootReducer'
import { getItems } from "../actions/itemsAction"
import Home from "../components/pages/Home"
import { State } from '../reducers/itemsReducer'

// import { AppState } from "../store"

// ミドルウェアの導入
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// )

// Reduxの流れ②: viewからよばれる
export interface HomeHandler {
  handleGetItems(): void
}

// const mapStateToProps = (appState: AppState) => {
//   return {
//     items: appState.state.items
//   }
// }

const mapStateToProps = (state: State) => {
  console.log('mapStateToProps', state)
  return { items: state.items, isFetching: state.isFetching }
}

// Reduxの流れ③: actionがdispatchされる
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    handleGetItems: getItems,
  }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)