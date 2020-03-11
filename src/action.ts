import { actionCreatorFactory } from '../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

/**
 * Reduxの流れ④: container componentからよばれる
 * 各アクションのactionCreatorの引数はReducerが処理を識別するためのFunctionの名前。
 */
export const ItemsActions = {
    getItems: actionCreator('GET_ITEMS'),
}
