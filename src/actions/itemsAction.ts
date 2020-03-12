import { db } from '../firebase'

// Reduxの流れ④: reducerへ
// リクエスト開始時にdispatch
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST'
const getItemsRequest = () => {
  return {
    type: GET_ITEMS_REQUEST
  }
}

// リクエスト成功時にdispatch
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
const getItemsSuccess = (data: any) => {
  return {
    type: GET_ITEMS_SUCCESS,
    items: data,
    // receivedAt: Date.now()
  }
}

// リクエスト失敗時にdispatch
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'
const getItemsFailure = (error: any) => {
  return {
    type: GET_ITEMS_FAILURE,
    error
  }
}

export const getItems = (): Function => {
  console.log('%c==================actions/itemActions: getItems request', 'color: red')
  return (dispatch: any) => {
    dispatch(getItemsRequest())
    const items: any= []
    db.collection("items").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc: any): void => {
          items.push(doc.data())
        });
        console.log('%c==================actions/itemActions: getItems success', 'color: red')
        console.log("data:", items, 'color: blue')
        dispatch(getItemsSuccess(items))
      }).catch((err) => {
        console.log('%c==================actions/itemActions: getItems error', 'color: red')
        dispatch(getItemsFailure(err))
      })
  }
}