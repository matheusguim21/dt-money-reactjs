import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const NewTransactionButton = styled.button`
  width: 9.5rem;
  height: 3.125rem;
  background: ${(props) => props.theme['green-500']};
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  line-height: 1.6;
  font-weight: bold;
  border: 0;
  cursor: pointer;

  transition: background-color 0.3s;

  :hover {
    background: ${(props) => props.theme['green-700']};
  }
  :focus {
    box-shadow: none;
  }
  :active {
    background-color: ${(props) => props.theme['green-500']};
    transition: background-color 0.2s ease-in-out;
  }
`
