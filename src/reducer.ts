import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { ItemsActions } from './action';

export interface State {
    inputValue: string
    selectedValue: string
    clickCount: number
    items: { name: string}
}

export const initialState: State = {
    inputValue: '',
    selectedValue: '',
    clickCount: 0,
    items: { name: 'initial'}
}

// Reduxの流れ⑤: stateの値を書き換える
export const Reducer = reducerWithInitialState(initialState)
    .case(ItemsActions.getItems, (state) => {
        console.log('reducer.ts !!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        return { ...state, items: {name: 'test'} }
    })