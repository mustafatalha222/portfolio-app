import '../../pages/style.css'
import Typewriter from 'typewriter-effect'

function Text() {
  return (
    <Typewriter
      options={{
        strings: ['Front End Developer', 'Full Stack Developer', 'React/Next Developer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text
