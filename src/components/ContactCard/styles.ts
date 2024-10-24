import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 40px;
  margin-bottom: 16px;
  margin-top: 18px;
  border-radius: 8px;

  @media (max-width: 764px) {
    display: block;
  }
`
export const Titulo = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 16px;

  @media (max-width: 764px) {
    display: block;
    margin-left: 0;
    margin-top: 12px;
  }
`
export const Email = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 8px;
  margin-right: 8px;

  @media (max-width: 764px) {
    margin-left: 0;
  }
`
export const Telefone = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
`
export const ActionBar = styled.div`
  background-color: #fcfcfc;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 764px) {
    display: block;
    width: 100%;
    border: none;
  }
`
