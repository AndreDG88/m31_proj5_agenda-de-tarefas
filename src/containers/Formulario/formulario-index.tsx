//Criação da extrutura da página de cadastro de novas tarefas.
import { BotaoSalvar, MainContainer, Titulo } from '../../styles/global-index'
import { Campo } from '../../styles/global-index'
import { Form, Opcoes } from './formulario-styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Título" />
      <Campo as="textarea" placeholder="Descrição da tarefa" />
      <Opcoes>
        <p>Qual é a Prioridade?</p>
        <input name="prioridade" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input name="prioridade" type="radio" id="importante" />{' '}
        <label htmlFor="importante">Importante</label>
        <input name="prioridade" type="radio" id="normal" />{' '}
        <label htmlFor="normal">Normal</label>
      </Opcoes>
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  </MainContainer>
)

export default Formulario
