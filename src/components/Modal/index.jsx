/**
 * Modal container centered on the screen.
 *
 * @param {Object} props - Styles and content of the modal.
 * @property {JSX.Element | JSX.Element[]} props.children - Modal content - child elements.
 * @property {string} props.styles - List of classes in a string.
 */
function Modal({ children, styles }) {
  return (
    <>
      <div
        className="absolute h-full w-full bg-black opacity-60 z-10"
        id="back-modal"
      ></div>
      <article
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${styles}`}
      >
        {children}
      </article>
    </>
  )
}

export default Modal
