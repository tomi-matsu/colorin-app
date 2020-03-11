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
  console.log(data)
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

    db.collection("items").get()
      .then((data) => {
        console.log("data:", data.docs)
        dispatch(getItemsSuccess(data.docs))
      }).catch((err) => {
        console.log("error!!!!!!")
        dispatch(getItemsFailure(err))
      })

    // const items = db.collection("items")
    // items.get().then((doc) => {
    // if (doc.exists) {
    //   console.log("Document data:", doc.data())
    //   dispatch(getItemsSuccess(doc.data()))
    // } else {
    //   console.log("No such document!")
    // }
    // }).catch((error) => {
    //   dispatch(getItemsFailure(error))
    // })
  }
}