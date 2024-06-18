import styled from 'styled-components'

export const TransactionsConteiner = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  margin-top: 1.5rem;

  td {
    padding: 1.5rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    :first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    :last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`
interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.theme[props.variant === 'income' ? 'green-500' : 'red-300']};

  ::before {
    content: '${(props) => (props.variant === 'income' ? '+' : '-')}';
  }
`
