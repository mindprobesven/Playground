import { connect } from 'react-redux'
import Posts from '../components/Posts';

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
    isFetching,
    posts
  }
}

const SubredditPosts = connect(mapStateToProps)(Posts)

export default SubredditPosts