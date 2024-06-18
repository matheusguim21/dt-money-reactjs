import { create } from 'zustand'
import { api } from '../lib/axios'
import { TransactionsState } from './types'

const API_URL = '/transactions'

export const useTransactions = create<TransactionsState>((set) => ({
  transactions: [],
  isModalOpen: false,
  setModalOpen: (value) => {
    set((state) => ({
      ...state,
      isModalOpen: value,
    }))
  },
  addTransaction: async (newTransaction) => {
    const { category, description, price, type } = newTransaction
    try {
      console.log('Chegou no try catch')

      // Fazendo a chamada de API para salvar a transação
      const response = await api.post(API_URL, {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      })
      if (response.status === 201) {
        console.log('Criou')

        useTransactions.getState().loadTransactions()
      } else {
        console.error(
          'Erro ao salvar a transação:',
          response.status,
          response.statusText,
        )
      }
    } catch (error) {
      console.error('Erro ao salvar a transação:', error)
    }
  },
  removeTransaction: async (transactionId) => {
    try {
      // Fazendo a chamada de API para remover a transação
      const response = await api.delete(`${API_URL}/${transactionId}`)
      if (response.status === 200) {
        // Supondo que 200 é o status de sucesso para deleção
        // Removendo a transação do estado se a chamada de API for bem-sucedida
        set((state) => ({
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== transactionId,
          ),
        }))
      } else {
        console.error(
          'Erro ao remover a transação:',
          response.status,
          response.statusText,
        )
      }
    } catch (error) {
      console.error('Erro ao remover a transação:', error)
    }
  },
  loadTransactions: async (query?: string) => {
    const response = await api.get(API_URL, {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })
    if (response.status === 200) {
      console.log('resposta da query', response.data)

      set(() => ({
        transactions: response.data,
      }))
    }
  },
}))
