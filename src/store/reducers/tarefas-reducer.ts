// Configuração do Reducer para as tarefas
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa-model'
import * as enums from '../../utils/enums/enum-tarefa'

//Config de tipagem para que TarefasState tenha seus itens seguindo a configuração da classe model Tarefa.
type TarefasState = {
  itens: Tarefa[]
}

//Config para que o initialState tenha como valor os itens preenchidos na tipagem de TarefasState
const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript revendo o exercício do módulo 7.',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar material de apoio.',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar TypeScript'
    },
    {
      id: 3,
      descricao: 'Praticar a construção de uma landing page',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Bootstrap'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  //Função responsável por remover cards de tarefas.
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    //Função responsável por editar cards de tarefas.
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    //Função responsável por cadastrar novos cards de tarefas. E também de verificar se já axistem cards de mesmo nome
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já esxiste uma tarefa registrada com este mesmo nome.')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions // Exportando apenas a função remover de tarefasSlice

export default tarefasSlice.reducer
