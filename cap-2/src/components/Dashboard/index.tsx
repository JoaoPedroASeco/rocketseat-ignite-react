import { Sumary } from "../Sumary"
import { TransactionTable } from "../TransactionTable"
import { Cointainers } from "./styles"

export const Dashboard = () => {
  return (
    <Cointainers>
      <Sumary />
      <TransactionTable />
    </Cointainers>
  )
}