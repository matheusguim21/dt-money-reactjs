import * as Dialog from '@radix-ui/react-dialog'
import logoDT from '../../assets/dt-money.svg'
import { useTransactions } from '../../contexts/transactions'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
export function Header() {
  const { isModalOpen, setModalOpen } = useTransactions()
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDT} alt="logo" />
        <Dialog.Root open={isModalOpen} onOpenChange={setModalOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton onClick={() => setModalOpen(true)}>
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
