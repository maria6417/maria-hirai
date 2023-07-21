import styles from './Home.module.scss';
import maria from '../../assets/mariah.jpg';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.profilePic}>
        <img src={maria} alt="maria hirai" />
      </div>
      <div className={styles.introText}>
        <p className={styles.intro}>
          Hello! <br />I am Maria Hirai. <br />A Front End Engineer based in Los
          Angeles.
        </p>
      </div>
    </div>
  );
};

export default Home;
