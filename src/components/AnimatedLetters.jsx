import './AnimatedLetters.scss'
function AnimatedLetters({ letterClass, str, idx }) {
  const strArray = str.split('')
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
