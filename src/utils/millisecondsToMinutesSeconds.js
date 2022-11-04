const millisecondsToMinutesSeconds = (milliseconds) => {
  let minutes = ('00' + Math.floor(milliseconds / 60000)).slice(-2)
  let seconds = ('00' + Math.floor((milliseconds % 60000) / 1000)).slice(-2)

  return [minutes, seconds]
}

export default millisecondsToMinutesSeconds
