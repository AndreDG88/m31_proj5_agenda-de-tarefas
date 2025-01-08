// Importação de todos os estilos criados em filtro_card-styles.ts.
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro-reducer'
import { RootReducer } from '../../store/store-index'
import * as S from './filtro_card-styles'
import * as enums from '../../utils/enums/enum-tarefa'

//Configuração das props deste arquivo.
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

// Configuração dos cards para o filtro lateral.
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  //verificação de qual card filtro está ativo
  const verificaAtivo = () => {
    const criterioIgual = filtro.criterio === criterio
    const valorIgual = filtro.valor === valor

    return criterioIgual && valorIgual
  }

  //Função para fazer a contagem de tarefas de cada card
  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaAtivo()
  const contador = contarTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
