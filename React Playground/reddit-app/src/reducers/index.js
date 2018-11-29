import { combineReducers } from 'redux'
import { SELECT_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

const selectedSubreddit = (state='reactjs', action) => {
  switch(action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const posts = (state = { 
  isFetching: false,
  items: []
}, 
action) => {
  switch(action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
        lastUpdated: action.lastUpdated
      }
    default:
      return state
  }
}

const postsBySubreddit = (state={}, action) => {
  switch(action.type) {
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedSubreddit,
  postsBySubreddit
})

export default rootReducer