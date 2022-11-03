import { Link } from 'wouter'

function ButtonLink({ href, msg, styles }) {
  return (
    <Link href={href}>
      <a className={styles}>
        <span>{msg}</span>
      </a>
    </Link>
  )
}

export default ButtonLink
