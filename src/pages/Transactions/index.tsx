import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SeachForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsConteiner, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;

}
export function Transactions() {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function fetchTransactions() {
      const response = await fetch("http://localhost:3000/transactions")

      const data = await response.json();
      console.log(data);
      setTransactions(data)

    }
    fetchTransactions()

  }, [])

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