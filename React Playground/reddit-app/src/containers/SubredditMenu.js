import { connect } from 'react-redux'
import { selectSubreddit } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state) => {
  const { selectedSubreddit } = state

  return {
    value: selectedSubreddit,
    options: ['reactjs', 'oculus', 'frontend']
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (subreddit) => dispatch(selectSubreddit(subreddit))
  }
}

const SubredditMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default SubredditMenu