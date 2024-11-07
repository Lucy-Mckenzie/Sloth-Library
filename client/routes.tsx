import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
  </Route>
)
