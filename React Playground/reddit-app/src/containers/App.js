import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import SubredditMenu from './SubredditMenu';
import SubredditPosts from './SubredditPosts';

class App extends Component {
  componentDidMount() {
    const { selectedSubreddit, dispatch } = this.props
    dispatch(fetchPosts(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    const { selectedSubreddit, dispatch } = this.props
    
    if(prevProps.selectedSubreddit !== selectedSubreddit) {
      dispatch(fetchPosts(selectedSubreddit))
    }
  }
  
  render() {
    const { isFetching, posts } = this.props
    
    return(
      <div>
        <SubredditMenu />
        <hr />
        {(isFetching && posts.length === 0) && <h3>Loading...</h3>}
        {(isFetching && posts.length > 0) && <h3>Updating...</h3>}
        {posts.length > 0 && <SubredditPosts />}  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedSubreddit, postsBySubreddit } = state

  const { 
    isFetching, 
    items: posts 
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    isFetching,
    posts
  }
}

export default connect(mapStateToProps)(App)