import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransctions } from "../../hooks/useTransactions";

import { Container, TransTypeContainer, RadioBox } from "./styles";

interface NewTransModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransModal({ isOpen, onRequestClose }: NewTransModalProps) {
  const { createTransaction } = useTransctions();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function resetValues() {
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
  }

  async function handleCreateNewTrans(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    resetValues();
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTrans}>
        <h2>Nova transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type == "deposit"}
            activeColor="green"
          >
            Entrada
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("descont")}
            isActive={type == "descont"}
            activeColor="red"
          >
            Saída
          </RadioBox>
        </TransTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
