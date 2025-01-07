//Arquivo de configuração do Redux
import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas-reducer'
import filtroReducer from './reducers/filtro-reducer'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

//Para definir a tipagem de um objeto, variável ou constante
export type RootReducer = ReturnType<typeof store.getState>

export default store
