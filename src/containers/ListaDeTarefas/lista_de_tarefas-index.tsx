import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa/tarefa-index'
import { Container } from './lista_de_tarefas-styles'
import { RootReducer } from '../../store/store-index'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <p>
        0 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
