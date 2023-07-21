import styles from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './styles/global.scss';

function App() {
  return (
    <div className={styles.header}>
      <Header />
      <Home />
      {/* About */}
    </div>
  );
}

export default App;
