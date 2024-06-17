import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SeachForm";
import { Summary } from "../../components/Summary";
import { useTransactions } from "../../contexts/transactions";
import { PriceHighlight, TransactionsConteiner, TransactionsTable } from "./styles";


export function Transactions() {

  const { addTransaction, transactions, loadTransactions } = useTransactions()

  // useEffect(() => {

  //   loadTransactions()

  // }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsConteiner>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (

              <tr key={transaction.id}>
                <td width={"50%"}>{transaction.description}</td>
                <td><PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight></td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>

            ))}

          </tbody>
        </TransactionsTable>
      </TransactionsConteiner>
    </div>
  )

}