import Modal from '../Modal'
import Button from '../Button'
import ButtonLink from '../ButtonLink'

import millisecondsToMinutesSeconds from '../../utils/millisecondsToMinutesSeconds'

import { total_time } from '../../consts/game'

/**
 * Shows the result of the game.
 *
 * @Component
 * @param {Object} props - Statistics and game function.
 * @param {Object} dataGame - Game statistics.
 * @param {number} dataGame.time - Duration of the game.
 * @param {number} dataGame.flips - Number of flipped cards.
 * @param {string} [status= ("victory" | "defeat")]
 * @callback tryGame - Restart the game.
 */

function ModalResult({ dataGame, tryGame, status }) {
  let won = status === 'victory'

  let time = won ? dataGame.time : total_time

  let [minutes, seconds] = millisecondsToMinutesSeconds(time)
  let title = won
    ? 'Una victoria mínima, pero victoria al fin y al cabo.'
    : 'Oídos que resuenan,visión borrosa... el fin está cerca.'

  return (
    <Modal styles="text-2xl text-center text-black rounded-lg md:w-[620px] md:h-[425px]">
      <div className="absolute top-[47px] left-0 w-full h-full">
        <h1 className="text-[1.4rem] shadowText">{title}</h1>
        <div className="mt-10">
          <ul>
            <li>
              Tiempo:{' '}
              <span className="text-[#ca0b0b]">
                {minutes}:{seconds}
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

export default ModalResult
