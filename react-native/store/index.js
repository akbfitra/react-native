import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  data : [],
  isLoading : false,
  searchData: [],
  error : {}
}

function data (state = initialState, action){
  switch(action.type){
    case 'FETCH':
      return { ...state, data : action.data }
    case 'SEARCH':
      return { ...state, searchData: action.data }
    case 'LOADING':
      return { ...state, isLoading: true }
    case 'LOADING_DONE':
      return { ...state, isLoading: false }
    case 'ERROR_DATA':
      return {...state, error : action.data}
    case 'RESET_DATA':
      return {...state, error: {}, searchData: []}
    default: 
      return state
  }
}

let store = createStore(data, applyMiddleware(thunk))

export default store