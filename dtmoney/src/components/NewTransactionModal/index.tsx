import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import Close from "../../assets/Close.svg"
import Entradas from "../../assets/Entradas.svg"
import Saídas from "../../assets/Saídas.svg"
import { FormEvent, useContext, useState } from "react";

import { api } from "../../services/api";
import { TransactionsContext, TransactionType } from "../../hooks/useTransaction";

export const NewTransactionModal = ({ isOpen, onRequestClose }: { isOpen: boolean, onRequestClose: (_: boolean) => void; }) => {
  const { transactions, setTransactions } = useContext(TransactionsContext)

  const [type, setType] = useState("")
  const [title, setTitle] = useState("")
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState("")

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()

    const data: TransactionType = {
      id: value,  
      title,
      amount: value,
      category,
      type,
      createdAt: new Date().toString(),
    }

    try {
      api.post("/transactions", data).then(({data}) => console.log(data))
      onRequestClose(false)
      setTransactions([...transactions, data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose(false)}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => onRequestClose(false)}
        className="react-modal-close"
      >
        <img src={Close} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value) }
        />

        <input
          placeholder="Valor"
          type={"number"}
          value={value}
          onChange={(e) => setValue(Number(e.target.value)) }
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={Entradas} alt="Entrada" />
            <span>
              Entrada
            </span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "whitdraw"}
            activeColor="red"
            onClick={() => setType("whitdraw")}
          >
            <img src={Saídas} alt="Saída" />
            <span>
              Saída
            </span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value) }
        />

        <button
          type="submit"
        > 
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}