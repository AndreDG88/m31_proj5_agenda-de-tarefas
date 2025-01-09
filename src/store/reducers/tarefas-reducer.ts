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
      descricao:
        'Este é um card de teste, apenas para você ver como suas tarefas vão ser apresentadas. =)',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Oi! Eu sou um card teste de Tarefa!'
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
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já esxiste uma tarefa registrada com este mesmo nome.')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions // Exportando apenas a função remover de tarefasSlice

export default tarefasSlice.reducer
