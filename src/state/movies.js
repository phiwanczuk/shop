const SET_MOVIES = 'movies/SET_MOVIES'

export const getMovies = () => (dispatch, getState) => {
  fetch(
    'http://www.omdbapi.com/?apikey=e007e3f6&s=star%20wars'
  )
    .then(response => response.json())
    .then(data => {
      dispatch(setMovies(data))
    })
}

const setMovies =(moviesData) => ({
  type: SET_MOVIES,
  moviesData
})

const initialState = {
  moviesData: []
}
export default (state = initialState,action) => {
  switch (action.type){
    case SET_MOVIES:
        return {
          ...state,
          moviesData: action.moviesData
        }
    default:
      return state
  }
}