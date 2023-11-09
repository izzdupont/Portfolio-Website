import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Project />} />
      </Route>
    </Routes>
  </>
  )
}

export default App;
