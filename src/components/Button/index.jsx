function Button({ msg, styles, onAction }) {
  return (
    <button className={styles} onClick={() => onAction()}>
      <span>{msg}</span>
    </button>
  )
}

export default Button
