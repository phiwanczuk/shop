import { createStore,combineReducers,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import movies, { getMovies} from "./state/movies";

const reducer = combineReducers({
  movies
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose


export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.dispatch(getMovies('star wars'))