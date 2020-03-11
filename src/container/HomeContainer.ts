import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TextInputActions } from "../action";
import { ItemsActions } from "../action";
import Home from "../components/pages/Home";
import { AppState } from "../store";

// Reduxの流れ②: viewからよばれる
export interface TopPageHandler {
    handleGetItems(): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        items: appState.state.items
    }
}

// Reduxの流れ③: actionがdispatchされる
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleGetItems: () => { dispatch(ItemsActions.getItems()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)