// Arquivo de estilização do filtro_card-index.tsx.
import styled from 'styled-components'
import { Props } from './filtro_card-index' // Importação das props criadas em filtro_card-index.tsx.

type PropsOmit = Omit<Props, 'contador' | 'legenda'> // Props criada para que a cosnta card não precise ver as propriedades contador e legenda.

//Config de estilo do corpo.
export const Card = styled.div<PropsOmit>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90ff' : ' #a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : ' #fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90ff' : ' #5e5e5e')};
  border-radius: 8px;
`

//Config de estilo da numeração.
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

//Config de estilo de texto.
export const Label = styled.span`
  font-size: 14px;
`
