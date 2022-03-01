import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import styles from './SpecialMenu.module.scss';

const SpecialMenu = () => (
  <div id='menu' className={`${styles.specialMenu} flex__center section__padding`}>
    <div className={`${styles.specialMenu_title}`}>
      <SubHeading title='Menu That Fits Your Palatte' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className={`${styles.specialMenu_menu}`}>
      <div className={`${styles.specialMenu_menu_wine} flex__center`}>
        <p className={`${styles.specialMenu_menu_heading}`}>Wine & Beer</p>
        <div className={`${styles.specialMenu_menu_items}`}>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className={`${styles.specialMenu_menu_img}`}>
        <img src={images.menu.src} alt="menu image" />
      </div>

      <div className={`${styles.specialMenu_menu_cocktails} flex__center`}>
        <p className={`${styles.specialMenu_menu_heading}`}>Cocktails</p>
        <div className={`${styles.specialMenu_menu_items}`}>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <button className='custom__button' type='button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
