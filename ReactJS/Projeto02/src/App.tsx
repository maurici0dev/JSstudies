import { GlobalStyle } from "./assets/styles/global";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import { NewTransModal } from "./components/NewTransModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTansModalOpen, setIsNewTansModalOpen] = useState(false);

  function handleOpenNewTransModal() {
    setIsNewTansModalOpen(true);
  }

  function handleCloseNewTransModal() {
    setIsNewTansModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransModal={handleOpenNewTransModal} />
      <Dashboard />
      <NewTransModal
        isOpen={isNewTansModalOpen}
        onRequestClose={handleCloseNewTransModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
