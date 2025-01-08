// Arquivo de estilização do arquivo lista_de_tarefas-index.tsx.
import styled from 'styled-components'

//Config de estilos do container aonde os cards das tarefas vão ficar.
export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

//Config de estilos do texto de resultado das buscas na página.
export const Resultado = styled.p`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
