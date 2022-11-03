import Header from '../../components/Header'

function Layout({ children }) {
  return (
    <div className="max-h-screen">
      <Header />
      <main className="relative max-h-[calc(100vh_-_56px)] h-screen">
        {children}
      </main>
    </div>
  )
}

export default Layout
