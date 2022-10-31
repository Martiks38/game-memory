import Header from '../../components/Header'

function Layout({ children }) {
  return (
    <div className="max-h-screen overflow-y-hidden">
      <Header />
      <main className="relative min-h-screen">{children}</main>
    </div>
  )
}

export default Layout
