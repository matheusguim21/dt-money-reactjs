import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SeachForm'
import { Summary } from '../../components/Summary'
import { useTransactions } from '../../contexts/transactions'
import { DateFormatter, PriceFormatter } from '../../utils/formatter'
import {
  PriceHighlight,
  TransactionsConteiner,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const { transactions, loadTransactions } = useTransactions()

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsConteiner>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width={'50%'}>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {PriceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{DateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsConteiner>
    </div>
  )
}
