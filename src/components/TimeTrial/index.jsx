import { useEffect, useState } from 'react'
import millisecondsToMinutesSeconds from '../../utils/millisecondsToMinutesSeconds'

const total_time = 5 * 60 * 1000

function TimeTrial({ initTime, status, onFinish }) {
  const [time, setTime] = useState(total_time)

  useEffect(() => {
    let left_time = null

    if (time === 0) {
      onFinish((stateGame) => {
        return { ...stateGame, status: 'defeat' }
      })
    }

    if (status !== 'playing') {
      clearInterval(left_time)
    }

    if (status === 'playing' && initTime !== 0) {
      left_time = setInterval(() => {
        setTime((time) => time - 1000)
      }, 1000)
    }

    return () => {
      if (left_time) clearInterval(left_time)
    }
  }, [initTime, status])

  let [minutes, seconds] = millisecondsToMinutesSeconds(time)
  return (
    <div className="mb-4 text-4xl text-center text-[#cd0300]">
      Tiempo restante {minutes}:{seconds}
    </div>
  )
}

export default TimeTrial
