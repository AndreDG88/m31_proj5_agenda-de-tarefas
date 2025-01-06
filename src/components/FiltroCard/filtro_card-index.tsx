// Importação de todos os estilos criados em filtro_card-styles.ts.
import * as S from './filtro_card-styles'

//Configuração das props deste arquivo.
export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

// Configuração dos cards para o filtro lateral.
const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
