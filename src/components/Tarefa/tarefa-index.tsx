//importação dos estilos configurados em tarefa-styles.tsx.
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './tarefa-styles'
import { remover, editar } from '../../store/reducers/tarefas-reducer'
import TarefaClass from '../../models/Tarefa-model'

// Definição das props dos elementos editáveis, baseadas na clase tarefa em models.
type Props = TarefaClass

//configuração dos cards descritivos das tarefas.
const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false) // Função useState para a alteração entre os botões editar e cancelar
  const [descricao, setDescricao] = useState('') // Função para receber um valor do textarea de descrição

  // Config de UseEffect para manter as descrições dos cards, caso eles já tenham sido preenchidos.
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  //Função para que a descrição original volte a caixa de texto quando o botão cancelar for acionado.
  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando} // Para que a caixa de texto só seja editavel quando o botão editar for selecionado.
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)} // onchange para recebimento do valor de setDescricao
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(editar({ titulo, prioridade, status, descricao, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BtnCancelarRemover onClick={cancelarEdicao}>
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
