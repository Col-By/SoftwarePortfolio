import styles from './App.module.css';

import { Navbar } from './components/Navbar/Navbar';
import { Portrait } from './components/Portrait/Portrait';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Portrait />
    </div>
  )
}

export default App
