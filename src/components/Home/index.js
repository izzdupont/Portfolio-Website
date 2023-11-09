import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/sub_logo.png';
import MyImage from '../../assets/images/mypic.png';
import Popup from '../Popup';
import { Link } from 'react-router-dom';

const Home = () => {
  const [letterClass, setLetterClass ] = useState('text-animate')
  const nameArray = ['u', 'i', 'z', ' ', 'D', 'u', 'P', 'o', 'n', 't']

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
 
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1> 
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
        <img src={ LogoTitle } alt="image1" class="image1"/>
        <AnimatedLetters letterClass={letterClass} 
        strArray={nameArray}
        idx={15}
        />
        <br />
        </h1>
        <h2> Web Developer, Cloud Analyst, IT Specialist </h2>
        <input type='button' value="CONTACT ME" onClick={togglePopup} />     
      </div>
      <img src={ MyImage } alt="i" class="image2"/>
    </div>
  );
}
export default Home
