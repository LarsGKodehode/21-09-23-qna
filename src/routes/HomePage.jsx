import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export function HomePage() {
  return (
    <>
      <h2>Home Page</h2>

      <ul>
        {
          blogPosts.map(post => {
            return (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            )
          })
        }
      </ul>

    </>
  )
}