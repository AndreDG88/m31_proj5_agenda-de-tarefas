//importação do arquivo de estilo e demais arquivos externos usados
import FiltroCard from '../../components/FiltroCard/filtro_card-index'
import * as S from './barra_lateral-styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluídas" contador={2} />
        <FiltroCard legenda="Urgentes" contador={3} />
        <FiltroCard legenda="Importantes" contador={4} />
        <FiltroCard legenda="Normal" contador={5} />
        <FiltroCard legenda="Todas" contador={6} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
