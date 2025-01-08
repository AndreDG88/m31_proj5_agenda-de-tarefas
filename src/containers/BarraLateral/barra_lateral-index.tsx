//importação do arquivo de estilo e demais arquivos externos usados
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { alteraTermo } from '../../store/reducers/filtro-reducer'
import FiltroCard from '../../components/FiltroCard/filtro_card-index'
import { Campo } from '../../styles/global-index'
import * as S from './barra_lateral-styles'
import * as enums from '../../utils/enums/enum-tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="Pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="Concluídas"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Urgentes"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="Importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="Normal"
          />
          <FiltroCard criterio="todas" legenda="Todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
