import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

export type TransactionType = { id: number, title: string, type: string, amount: number, category: string, createdAt: string }

type TransactionsContextType = {
  transactions: TransactionType[];
  setTransactions: (_: TransactionType[]) => void;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect(() => {
    api.get("transactions")
      .then(({ data: { transactions } }) => setTransactions(transactions))
  }, [])
  
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
} 

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}