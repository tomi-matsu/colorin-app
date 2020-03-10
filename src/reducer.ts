import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { TextInputActions } from './action';
import { ItemsActions } from './action';

export interface State {
    inputValue: string
    selectedValue: string
    clickCount: number
    items: object
}

export const initialState: State = {
    inputValue: '',
    selectedValue: '',
    clickCount: 0,
    items: {}
}

// Reduxの流れ⑤: stateの値を書き換える
export const Reducer = reducerWithInitialState(initialState)
    .case(TextInputActions.updateTextInputValue, (state, inputValue) => {
        return { ...state, inputValue }
    })
    .case(TextInputActions.updateSelectedValue, (state, selectedValue) => {
        return { ...state, selectedValue }
    })
    .case(TextInputActions.updateClickCount, (state) => {
        return { ...state, clickCount: state.clickCount + 1 }
    })
    .case(ItemsActions.getItems, (state) => {
        console.log('reducer.ts !!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        return { ...state, items: {name: 'test'} }
    })