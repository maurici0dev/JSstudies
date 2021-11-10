import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;

    background: var(--green);
    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : "transparent"};
  border: 1px solid #d7d7d7;

  font-size: 1rem;
  color: var(--text-title);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #c7c7c7;
  }
`;
