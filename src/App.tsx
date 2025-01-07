// área de importação que conecta o App.tsx com todos os outros componentes do projeto.
import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral/barra_lateral-index'
import ListaDeTarefas from './containers/ListaDeTarefas/lista_de_tarefas-index'
import EstiloGlobal, { Container } from './styles/global-index'
import store from './store/store-index'

// Aqui é basicamente a montagem de blocos, de containers e elementos para criar o front end
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
