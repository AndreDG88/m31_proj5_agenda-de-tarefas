//Criação do estilo global, configuração de reset
import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../variaveis'
import { Botao } from '../components/Tarefa/tarefa-styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serify;
    list-style: none;
  }
`
//Configuração do container principal do projeto, sua divisão de colunas
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

//Config de estilos dos  demais containers aonde os cards das tarefas vão ficar.
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

//Config de estilos do texto de resultado das buscas e página de cadastro.
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

//Configuração de estilo da área de pesquisa da Barra Lateral e caixas de texto.
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
//config do botão salvar usando configurações do botão de "Tarefa".
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
