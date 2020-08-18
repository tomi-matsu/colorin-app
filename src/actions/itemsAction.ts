import { db } from '../firebase'

// リクエスト開始時
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST'
const getItemsRequest = () => {
  return {
    type: GET_ITEMS_REQUEST
  }
}

// リクエスト成功時
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
const getItemsSuccess = (data: any) => {
  return {
    type: GET_ITEMS_SUCCESS,
    items: data,
    // receivedAt: Date.now()
  }
}

// リクエスト失敗時
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
    const items: any = []
    db.collection("items").get()
      .then((data) => {
        data.forEach((doc: any): void => {
          items.push({ ...doc.data(), id: doc.id})
        });
        console.log('%c==================actions/itemActions: getItems success', 'color: red')
        console.log("data:", items)
        dispatch(getItemsSuccess(items))
      }).catch((err) => {
        console.log('%c==================actions/itemActions: getItems error', 'color: red')
        dispatch(getItemsFailure(err))
      })
  }
}