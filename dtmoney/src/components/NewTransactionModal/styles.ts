import styled from "styled-components"
import { transparentize } from "polished"

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;

    border: 1px solid var(--input-border-color);
    background: 1px solid var(--input-background-color);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border-radius: .25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
`

type RadioBoxType = {
  isActive: boolean;
  activeColor: "red" | "green";
}

const colors = {
  red: "#e52e4d",
  green: "#33cc95"
}

export const RadioBox = styled.button<RadioBoxType>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: .25rem;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: flex;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  transition: border-color .2s;

  &:hover {
    border-color: #aaa;
  }

  background:  ${props => props.isActive ? transparentize(.9, colors[props.activeColor]) : "transparent"};
`