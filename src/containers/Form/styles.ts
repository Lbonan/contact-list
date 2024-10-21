import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
`
export const Titulo = styled.h2`
  margin-bottom: 30px;
`
export const Campo = styled.input`
  display: block;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 30px;
`

export const BackButton = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  background-color: ${variaveis.vermelho};
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  margin-left: 8px;
  transition:
    0.3s ease,
    0.3s ease,
    0.2s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid ${variaveis.vermelho};
    color: ${variaveis.vermelho};
    transform: scale(1);
  }
`
