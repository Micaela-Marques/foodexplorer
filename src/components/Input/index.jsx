import { Container } from './styles'

export function Input({ Icon, label, ...rest }) {
  return (
    <Container width={rest.width}>
      <span className="icon_search">{Icon && <Icon size={20} />}</span>
      <span className="label-input">{label && <label htmlFor={rest.id}>{label}</label>}</span>

      <input
        id={rest.id}
        {...rest}
      />
    </Container>
  )
}
