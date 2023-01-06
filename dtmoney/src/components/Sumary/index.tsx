import Entradas from "../../assets/Entradas.svg"
import Saídas from "../../assets/Saídas.svg"
import Total from "../../assets/Total.svg"
import { useTransactions } from "../../hooks/useTransaction"

import { Container } from "./styles"

export const Sumary = () => {
  const { transactions } = useTransactions()

  const sumary = transactions.reduce((counter, { type, amount }) => {
    if(type === "deposit") {
      counter.deposits += amount;
      counter.total += amount;
    } else if(type === "withdraw") {
      counter.withdraws += amount;
      counter.total -= amount;
    }
    return counter;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={Entradas} alt="Entradas" />
          </header>
          <strong>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(sumary.deposits)}</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={Saídas} alt="Saídas" />
          </header>
          <strong>- {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(sumary.withdraws)}</strong>
        </div>
        <div className="hightlight-background">
          <header>
            <p>Total</p>
            <img src={Total} alt="Total" />
          </header>
          <strong>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(sumary.total)}</strong>
        </div>
    </Container>
  )
}