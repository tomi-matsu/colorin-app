import { db } from '../firebase'

// Reduxの流れ④: reducerへ
// リクエスト開始時にdispatchされ，isFetchingをtrueにする
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST'
const getItemsRequest = () => {
  return {
    type: GET_ITEMS_REQUEST
  }
}

// リクエスト成功時にdispatchされ，isFetchingをfalseにしてデータをstateにセットする
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
const getItemsSuccess = (data: any) => {
  return {
    type: GET_ITEMS_SUCCESS,
    items: data,
    receivedAt: Date.now()
  }
}

// リクエスト失敗時にdispatchされ，isFetchingをfalseにしてエラーオブジェクトをstateにセットする
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'
const getItemsFailure = (error: any) => {
  return {
    type: GET_ITEMS_FAILURE,
    error
  }
}

export const getItems = (): Function => {
  console.log('actions/itemActions: getItems !!!!!!!!!!!!!!!!')
  return (dispatch: any) => {
    dispatch(getItemsRequest())
    const items: any= []
    db.collection("items").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc: any): void => {
          items.push(doc.data())
        });
        console.log('actions/itemActions: getItems success !!!!!!!!!!!!!!!!')
        console.log("data:", items)
        dispatch(getItemsSuccess(items))
      }).catch((err) => {
        console.log("error!!!!!!")
        dispatch(getItemsFailure(err))
      })
  }
}