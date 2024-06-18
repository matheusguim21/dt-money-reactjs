import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTransactions } from '../../contexts/transactions'
import { SearchFormContainer } from './styles'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormData = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { loadTransactions } = useTransactions()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormData) {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(isSubmitting)
    data.query !== '' ? loadTransactions(data.query) : loadTransactions()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  )
}
