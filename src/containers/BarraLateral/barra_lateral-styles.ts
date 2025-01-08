// Arquivo de estilização de barra_lateral-index.tsx.
import styled from 'styled-components'

//Configuração de estilo da barra lateral.
export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh; //configuração de 100% da altura disponível na viewport.
`

//Configuração de estilo dos cards dentro da Barra Lateral.
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
