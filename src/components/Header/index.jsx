import { Link } from 'wouter'

function Header() {
  return (
    <header className="bg-[#1a1a1a]">
      <div className="mx-auto px-10 py-2 w-full max-w-75 xl:px-0">
        <Link href="/">
          <a className="block w-fit">
            <figure className="h-10">
              <img
                src="/logo.png"
                alt=""
                className="h-full w-auto object-cover"
              />
            </figure>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
