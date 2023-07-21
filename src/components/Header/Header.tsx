import styles from './Header.module.scss';
import logo from '../../assets/m.png';

const Header = () => {
  return (
    <nav className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul>
        <li>
          <span className={styles.number}>01.</span> About
        </li>
        <li>
          <span className={styles.number}>02.</span> Experience
        </li>
        <li>
          <span className={styles.number}>03.</span> Works
        </li>
        <li>
          <span className={styles.number}>04.</span> Contact
        </li>
        <li>
          <button type="button" className={styles.button}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
