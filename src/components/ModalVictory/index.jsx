import Button from '../Button'
import Modal from '../Modal'
import ButtonLink from '../ButtonLink'

function ModalVictory({ dataGame, tryGame }) {
  let minute = ('00' + Math.floor(dataGame.time / 60000)).slice(-2)
  let seconds = ('00' + Math.floor((dataGame.time % 60000) / 1000)).slice(-2)

  return (
    <Modal styles="text-2xl text-center text-black rounded-lg md:w-[620px] md:h-[425px]">
      <div className="absolute top-[47px] left-0 w-full h-full">
        <p className="text-[1.4rem] shadowText">
          Una victoria mínima, pero victoria al fin y al cabo.
        </p>
        <div className="mt-10">
          <ul>
            <li>
              Tiempo:{' '}
              <span className="text-[#ca0b0b]">
                {minute}:{seconds}
              </span>
            </li>
            <li className="mt-4">
              Cartas volteadas:{' '}
              <span className="text-[#ca0b0b]">{dataGame.flips}</span>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-[90px] flex flex-col justify-center items-center gap-16 w-full md:flex-row">
          <ButtonLink
            href="/"
            msg="Inicio"
            styles="flex gap-[0.4em] items-center font-inherit btn-journal btn-journal_home ml-12"
            setClose="setViewModalWin"
          />
          <Button
            msg="Volver a jugar"
            styles="flex gap-[0.4em] items-center font-inherit btn-journal btn-journal_tryGame"
            onAction={tryGame}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="/journal_popup.background.webp"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </Modal>
  )
}

export default ModalVictory
