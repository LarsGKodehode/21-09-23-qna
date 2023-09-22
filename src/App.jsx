import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { LayoutBase } from './routes/LayoutBase'
import { HomePage } from './routes/HomePage'
import { BlogPost } from './routes/blog/BlogPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutBase />}>
          <Route index element={<HomePage />} />
          <Route path='blog/:id' element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
