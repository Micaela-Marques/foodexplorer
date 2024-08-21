import { Container } from './styles'

export function Input({ Icon, label, ...rest }) {
  return (
    <Container width={rest.width}>
      <span className="icon_search">{Icon && <Icon size={20} />}</span>

      {label && <label htmlFor={rest.id}>{label}</label>}

      <input
        id={rest.id}
        {...rest}
      />
    </Container>
  )
}
