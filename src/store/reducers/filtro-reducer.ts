//Configuração do reducer para a função de filtro da barra lateral.
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/enum-tarefa'

//Criação do filtro para a área de busca da barra lateral.
type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions
export default filtroSlice.reducer
