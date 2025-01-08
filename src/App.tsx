// área de importação que conecta o App.tsx com todos os outros componentes do projeto.
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles/global-index'
import store from './store/store-index'
import Home from './pages/Home/home-index'
import Cadastro from './pages/Cadastro/Cadastro-index'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

// Aqui é basicamente a montagem de blocos, de containers e elementos para criar o front end
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
