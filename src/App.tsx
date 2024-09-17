import { RouterProvider } from 'react-router-dom'
import Layout from './layout'
import router from './router'

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  )
}

export default App
