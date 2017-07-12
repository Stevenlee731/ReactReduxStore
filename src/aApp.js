import {createStore} from 'redux'


const store = createStore(reducer)


store.subscribe(() => {
  console.log('current state is: ', store.getState())
})

store.dispatch(
  {
    type:"POST_BOOK",
    payload: [{
      id: 1,
      title: 'book 1',
      description: 'this is the first book',
      price: 24.99
    }]
  }
)

store.dispatch(
  {
    type:"POST_BOOK",
    payload: [{
      id: 2,
      title: 'book 2',
      description: 'this is the second book',
      price: 24.99
    }]
  }
)

store.dispatch({
  type:"DELETE_BOOK",
  payload: { id: 1 }
})

store.dispatch({
  type:"UPDATE_BOOK",
  payload: {
    id: 2,
    title: 'revised book 2',
    description: 'this is the second book',
    price: 24.99
  }
})
