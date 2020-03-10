import { actionCreatorFactory } from '../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

/**
 * Reduxの流れ④: container componentからよばれる
 * 各アクションのactionCreatorの引数はReducerが処理を識別するためのFunctionの名前。
 */
export const TextInputActions = {
    updateTextInputValue: actionCreator<string>('ACTIONS_UPDATE_TEXT_INPUT_VALUE'),
    updateSelectedValue: actionCreator<string>('ACTION_UPDATE_SELECTED_VALUE'),
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT')
}

export const ItemsActions = {
    getItems: actionCreator('GET_ITEMS'),
}
