import React from 'react'

const Posts = ({ isFetching, posts }) => (
  <div style={{ opacity: isFetching ? 0.5 : 1 }}>
    <ul>
      {
        posts.map(post => <li key={post.id}>{post.title}</li>)
      }
    </ul>
  </div>
)

export default Posts