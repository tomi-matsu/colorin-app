import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../reducers/rootReducer'
import { getItems } from "../actions/itemsAction"
import Home from "../components/pages/Home"

export interface HomeHandler {
  handleGetItems(): Function
}

const mapStateToProps = (state: State) => {
  console.log('mapStateToProps', state)
  return { items: state.itemsState.items }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    handleGetItems: getItems,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)