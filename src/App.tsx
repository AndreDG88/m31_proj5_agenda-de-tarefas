// área de importação que conecta o App.tsx com todos os outros componentes do projeto.
import BarraLateral from './containers/BarraLateral/barra_lateral-index'
import ListaDeTarefas from './containers/ListaDeTarefas/lista_de_tarefas-index'
import EstiloGlobal, { Container } from './styles/global-index'

// Aqui é basicamente a montagem de blocos, de containers e elementos para criar o front end
function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
