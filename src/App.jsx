import styles from './App.module.css';

import { Navbar } from './components/Navbar/Navbar';

import { Portrait } from './components/Portrait/Portrait';
import { About } from './components/About/About';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Portrait />
      <About />
    </div>
  )
}

export default App
