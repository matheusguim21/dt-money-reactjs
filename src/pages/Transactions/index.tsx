import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SeachForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsConteiner, TransactionsTable } from "./styles";

export function Transactions(){

  return (
    <div>
      <Header/>
      <Summary/>

      <TransactionsConteiner>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width={"50%"}>Desenvolvimento de site</td>
              <td><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
              <td>Venda</td>
              <td>12/04/2024</td>
            </tr>
            <tr>
              <td width={"50%"}>Hamburguer</td>
              <td><PriceHighlight variant="outcome">R$ 45,00</PriceHighlight></td>
              <td>Alimentação</td>
              <td>12/04/2024</td>
            </tr>
            
          </tbody>
        </TransactionsTable>
      </TransactionsConteiner>
    </div>
  )

}