import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

import { blogPosts } from '../../data/blogPosts.js'

export function BlogPost() {
  const { id } = useParams()

  const details = blogPosts.find((post) => post.id == id)

  return (
    <article>
      <Link to="/">Home</Link>
      <h2>Blog Post</h2>
      <h3>{details.title}</h3>
    </article>
  )
}