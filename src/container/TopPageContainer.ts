import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TextInputActions } from "../action";
import { ItemsActions } from "../action";
import Home from "../components/pages/Home";
import Index from "../components/Index";
import { AppState } from "../store";

// Reduxの流れ②: viewからよばれる
export interface TopPageHandler {
    handleOnChangeValue(value: string): void
    handleOnSelectValue(value: string): void
    handleOnClick(): void
    handleGetItems(): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        inputValue: appState.state.inputValue,
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount,
        items: appState.state.items
    }
}

// Reduxの流れ③: actionがdispatchされる
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnChangeValue: (value: string) => { dispatch(TextInputActions.updateTextInputValue(value)) },
        handleOnSelectValue: (value: string) => { dispatch(TextInputActions.updateSelectedValue(value)) },
        handleOnClick: () => { dispatch(TextInputActions.updateClickCount()) },
        handleGetItems: () => { dispatch(ItemsActions.getItems()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)