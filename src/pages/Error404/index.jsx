import { Link } from 'wouter'
import Layout from '../Layout'

function Error404() {
  return (
    <Layout>
      <article className="absolute w-80 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[#ce0300] border-solid border-2 rounded-md md:w-[540px]">
        <div className="flex flex-col-reverse items-center justify-between gap-8 p-4 sm:flex-row">
          <figure className="basis-[200px]">
            <img
              src="/plague-error.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="flex flex-col grow text-center text-[#F00400] font-MedievalSharp">
            <h1 className="text-3xl">404</h1>
            <div>
              <p className="text-2xl">Página no encontrada</p>
              <Link href="/">
                <a className="block mt-3.5 text-2xl text-[#BFB37A] hover:underline">
                  INICIO
                </a>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Error404
