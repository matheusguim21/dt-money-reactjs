import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTransactions } from '../../contexts/transactions'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.coerce.number().min(1),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

export type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {
  const { addTransaction, setModalOpen } = useTransactions()

  const handleNewTransaction = (data: NewTransactionFormInputs) => {
    addTransaction(data)
    reset()
    setModalOpen(false)
  }

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      category: '',
      description: '',
      price: 0,
      type: '' as 'income',
    },
  })

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <Controller
            control={control}
            name="description"
            render={({ field: { name, onChange, value } }) => (
              <input
                type="text"
                placeholder="Descrição"
                autoFocus
                required
                onChange={onChange}
                name={name}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field: { name, onChange, value } }) => (
              <input
                type="number"
                placeholder="Preço"
                required
                onChange={onChange}
                name={name}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="category"
            render={({ field: { name, onChange, value } }) => (
              <input
                type="text"
                placeholder="Categoria"
                required
                onChange={onChange}
                name={name}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType onChange={field.onChange}>
                <TransactionTypeButton
                  type="button"
                  variant="income"
                  value="income"
                >
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton
                  type="button"
                  variant="outcome"
                  value="outcome"
                >
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
