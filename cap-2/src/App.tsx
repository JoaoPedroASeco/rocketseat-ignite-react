import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal"
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransaction";

Modal.setAppElement("#root")

export function App() {
  const [isNewTramnsactionOpen, setIsNewTramnsactionOpen] = useState(false)

  return (
    <TransactionsProvider>
      <Header setIsNewTramnsactionOpen={setIsNewTramnsactionOpen} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTramnsactionOpen}
        onRequestClose={setIsNewTramnsactionOpen}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}