import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useTransactions } from "../../contexts/transactions";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";




const newTransactionSchema = z.object({
  description: z.string(),
  price: z.coerce.number().min(1),
  category: z.string(),
  type: z.enum(["income", "outcome"])
})

export type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {

  const { addTransaction } = useTransactions()

  const handleNewTransaction = (data: NewTransactionFormInputs) => {


    addTransaction(data)
  }


  const { control, reset, handleSubmit, formState: { errors } } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema)
  })

  return (


    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>

        <form>
          <Controller
            control={control}
            name="description"
            render={({ field: { name, onChange, value } }) => (
              <input type="text" placeholder="Descrição" autoFocus required

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

              <input type="number" placeholder="Preço" required
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

              <input type="text" placeholder="Categoria" required
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

              <TransactionType>
                <TransactionTypeButton type="button" variant="income" value="income" onChange={field.onChange} >
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton type="button" variant="outcome" value="outcome" onChange={field.onChange}>
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>

              </TransactionType>
            )}

          />



          <button type="submit" onSubmit={handleSubmit(handleNewTransaction)}>
            Cadastrar
          </button>
        </form>

      </Content>

    </Dialog.Portal>

  )


}