function Modal({ children, styles, setClose, isClose = false }) {
  return (
    <>
      <div
        className="absolute h-full w-full bg-black opacity-60 z-10"
        id="back-modal"
        onClick={() => setClose((prevValue) => !prevValue)}
      ></div>
      <article
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${styles}`}
      >
        {isClose && (
          <button
            className="absolute top-[6%] right-[13%] cursor-default"
            onClick={() => setClose((prevValue) => !prevValue)}
          >
            <figure>
              <img src="/close.webp" alt="" />
            </figure>
          </button>
        )}
        {children}
      </article>
    </>
  )
}

export default Modal
