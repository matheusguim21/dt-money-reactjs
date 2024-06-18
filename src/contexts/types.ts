import { NewTransactionFormInputs } from '../components/NewTransactionModal'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
export interface TransactionsState {
  transactions: Transaction[]
  isModalOpen: boolean
  setModalOpen: (value: boolean) => void
  addTransaction: (transaction: NewTransactionFormInputs) => void
  removeTransaction: (transactionId: number) => void
  loadTransactions: (query?: string) => Promise<void>
}
