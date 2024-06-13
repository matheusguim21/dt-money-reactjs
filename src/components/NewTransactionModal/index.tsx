import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";


export function NewTransactionModal() {


  return (


    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>

        <form>

          <input type="text" placeholder="Descrição" autoFocus required />
          <input type="number" name="" id="" placeholder="Preço" required />
          <input type="text" name="" id="" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton type="button" variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton type="button" variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>

          </TransactionType>

          <button type="submit" >
            Cadastrar
          </button>
        </form>

      </Content>

    </Dialog.Portal>

  )


}