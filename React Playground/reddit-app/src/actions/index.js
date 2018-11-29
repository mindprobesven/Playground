import fetch from 'cross-fetch'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit
})

const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  lastUpdated: new Date()
})

export const fetchPosts = (subreddit) => (dispatch) => {
  dispatch(requestPosts(subreddit))
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then(response => response.json())
  .then(json => {
    console.log('Fetched posts!')
    console.log(json)
    dispatch(receivePosts(subreddit, json))
  }, error => console.log('ERROR: ' + error))
}