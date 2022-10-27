import Header from '../../components/Header'

function Layout({ children, styles }) {
  return (
    <div className={styles}>
      <Header />
      <main className="relative min-h-screen">{children}</main>
    </div>
  )
}

export default Layout
