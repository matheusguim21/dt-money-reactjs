import * as Dialog from "@radix-ui/react-dialog";
import logoDT from "../../assets/dt-money.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
export function Header() {
  return (
    <HeaderContainer>

      <HeaderContent>
        <img src={logoDT} />
        <Dialog.Root>
          <Dialog.Trigger asChild>

            <NewTransactionButton>
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}