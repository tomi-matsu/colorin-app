import { connect } from "react-redux"
import { Dispatch, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { getItems } from "../actions/itemsAction"
import Home from "../components/pages/Home"
// import { AppState } from "../store"

// ミドルウェアの導入
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

// Reduxの流れ②: viewからよばれる
export interface HomeHandler {
  handleGetItems(): void
}

// const mapStateToProps = (appState: AppState) => {
//   return {
//     items: appState.state.items
//   }
// }

const mapStateToProps = (state: any) => {
  return { items: state.items }
}

// Reduxの流れ③: actionがdispatchされる
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleGetItems: () => {
      console.log('components/container/HomeContainer:  !!!!!!!!!!!!!!!!')
      store.dispatch(getItems())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)