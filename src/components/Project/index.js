import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't']}
              idx={15}
            />
          <br />
          <AnimatedLetters
              letterClass={letterClass}
              strArray={['&']}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'c', 'h', 'i', 'v', 'e', 'm', 'e', 'n', 't']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance or colboration opportunities please feel free to contact me through LinkedIn.
          </p>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project
