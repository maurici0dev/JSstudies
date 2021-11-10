import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransModal: () => void;
}

export function Header({ onOpenNewTransModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src="" alt="Projeto#2" />
        <button type="button" onClick={onOpenNewTransModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
