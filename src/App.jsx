import { Route, Routes } from 'react-router-dom'
import { ErrorPage, Home, Message } from './modules'
import { Layout } from './components'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/message' element={<Message />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App