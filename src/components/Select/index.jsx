import { useState, useEffect } from 'react'
import { Container, Label, SelectWrapper, Select } from './styles'
import { api } from '../../Services/api'
import { FaChevronDown } from 'react-icons/fa'

export function SelectInput({ onSelect }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get('/categories')
        setCategories(data)
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <Container>
      <Label htmlFor="categories">Categoria</Label>
      <SelectWrapper>
        <Select
          id="categories"
          name="categories"
          onChange={(event) => onSelect(event.target.value)}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </Select>
        <FaChevronDown />
      </SelectWrapper>
    </Container>
  )
}

export default SelectInput
