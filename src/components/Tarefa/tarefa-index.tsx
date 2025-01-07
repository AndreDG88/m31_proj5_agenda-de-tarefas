//importação dos estilos configurados em tarefa-styles.tsx.
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './tarefa-styles'
import { remover } from '../../store/reducers/tarefas-reducer'
import TarefaClass from '../../models/Tarefa-model'

// Definição das props dos elementos editáveis, baseadas na clase tarefa em models.
type Props = TarefaClass

//configuração dos cards descritivos das tarefas.
const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false) // Função useState para a alteração entre os botões editar e cancelar
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BtnCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BtnCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BtnCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BtnCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
