import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay } from "./styles";


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

          <button type="submit" >
            Cadastrar
          </button>
        </form>

      </Content>

    </Dialog.Portal>

  )


}