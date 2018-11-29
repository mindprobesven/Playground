import React from 'react'
import { Provider } from 'react-redux'
import configReduxStore from '../config/reduxStore'
import App from './App';
import { selectSubreddit, fetchPosts } from '../actions';

const store = configReduxStore()

/*
const { selectedSubreddit } = store.getState()
store.dispatch(selectSubreddit('oculus'))
store.dispatch(fetchPosts(selectedSubreddit))
*/

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root