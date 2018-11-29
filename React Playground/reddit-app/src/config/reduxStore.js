import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';

const loggerMiddleware = createLogger()

const configReduxStore = (preLoadedState) => createStore(
  rootReducer,
  preLoadedState,
  applyMiddleware(
    loggerMiddleware,
    ThunkMiddleware
  )
)

export default configReduxStore