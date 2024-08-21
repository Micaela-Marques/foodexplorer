import { Container } from './styles'

export function Button({ title, Icon, id, label, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {Icon && (
        <span className="icon">
          <Icon />
        </span>
      )}
      <span className="button-text">{title}</span>

      {label && <label htmlFor={id}>{rest.label}</label>}
    </Container>
  )
}
