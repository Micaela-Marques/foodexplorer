import { useState, useEffect } from 'react'
import { Container, Label, SelectWrapper, Select } from './styles'
import { api } from '../../Services/api'
import { FaChevronDown } from 'react-icons/fa'

export function SelectInput() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get('/categories')
        console.log("🚀 ~ fetchCategories ~ response:", data)
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
