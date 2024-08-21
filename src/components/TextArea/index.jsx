import { Container } from './styles'

export function TextArea({ title, id, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        {...rest}
      />
    </Container>
  )
}
