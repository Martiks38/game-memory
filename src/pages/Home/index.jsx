import { useEffect } from 'react'
import { Link } from 'wouter'

import Layout from '../Layout'

function Home() {
  useEffect(() => {
    const containerHamlet = document.querySelector('#containerHamlet')

    const hamlet = document.querySelector('#hamlet')

    const { height } = hamlet.getBoundingClientRect()
    const halfHeight = height / 2

    const parallaxY = (element) => {
      const { offsetY } = element
      const translateY = ((offsetY - halfHeight) / halfHeight) * 5

      hamlet.style.transform = `translateY(${translateY}px)`
    }

    const resetParallaxY = () => {
      hamlet.style.transform = `translateY(0px)`
    }

    containerHamlet.addEventListener('mousemove', parallaxY)
    containerHamlet.addEventListener('mouseleave', resetParallaxY)

    return () => {
      containerHamlet.removeEventListener('mousemove', parallaxY)
      containerHamlet.removeEventListener('mouseleave', resetParallaxY)
    }
  }, [])

  return (
    <Layout styles="max-h-screen overflow-y-hidden">
      <div className="h-full w-full overflow-hidden" id="containerHamlet">
        <figure className="relative shadowTop">
          <img
            src="/hamlet.jpg"
            alt=""
            className="min-h-screen h-full w-full object-cover object-center"
            id="hamlet"
          />
        </figure>
      </div>
      <div className="absolute top-1/2 left-1/2 text-xl font-roboto font-medium -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-wrap justify-center gap-8 mx-auto w-fit sm:flex-nowrap">
          <Link href="/game">
            <a className="rounded-md px-3 py-2 bg-black shadow-red text-[#ce0300] border-2 border-transparent hover:shadow-none hover:border-[#f2852c] hover:text-[#f2852c]">
              Jugar
            </a>
          </Link>
          <Link href="/game/timeTrial">
            <a className="rounded-md px-3 py-2 bg-black shadow-red text-[#ce0300] border-2 border-transparent hover:shadow-none hover:border-[#f2852c] hover:text-[#f2852c]">
              Jugar contrarreloj
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
