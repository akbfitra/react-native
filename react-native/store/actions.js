import axios from "axios";

export const loading = () => {
  return {
    type: 'LOADING'
  }
}

export const loading_done = () => {
  return {
    type: 'LOADING_DONE'
  }
}

export const fetch = () => async dispatch => {
  try{
    dispatch(loading())
    const datafetch = await axios({
    method: 'GET',
    url: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?banlist=tcg&level=4&sort=name'
    })
    dispatch({
      type: 'FETCH',
      data: datafetch.data
    })
    dispatch(loading_done())
  }
  catch(err){
    console.log(err)
  }
}

export const fetchsearch = (data) => async dispatch => {
  try{
    dispatch(loading())
    const datasearch = await axios({
    method: 'GET',
    url: `https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${data}`
    })
    dispatch({
      type: 'SEARCH',
      data: datasearch.data
    })
    dispatch(loading_done())
  }
  catch(err){
    dispatch({
      type: 'ERROR_DATA',
      data: err.response.data
    })
  }
}

export const resetData = () => {
  return {
    type: "RESET_DATA"
  }
}
