import styles from './App.module.css';

import { Navbar } from './components/Navbar/Navbar';

import { Portrait } from './components/Portrait/Portrait';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Portrait />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
