import { SubHeading } from '../../components';
import images from '../../constants/images'
import styles from './Header.module.scss';

const Header = () => (
  <div id='home' className={`${styles.header } wrapper section__padding`}>
    <div className="wrapper__info">
      <SubHeading title='Chase the new flavour' />
      <h1 className={styles.header__h1}>The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className='custom__button' style={{marginBottom: '2rem'}} type='button'>Explore Menu</button>
    </div>
    <div className={`${styles.wrapper__img} wrapper__img`}>
      <img src={images.welcome.src} alt="header image" />
    </div>
  </div>
);

export default Header;
