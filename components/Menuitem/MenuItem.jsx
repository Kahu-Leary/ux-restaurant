import styles from './MenuItem.module.scss';

const MenuItem = ({ title, price, tags }) => (
  <div className={`${styles.menuitem}`}>
    <div className={`${styles.menuitem_head}`}>
      <div className={`${styles.menuitem_name}`}>
        <p className="p__cormorant" style={{ color: '#DCCA87'}}>{title}</p>
      </div>

      <div className={`${styles.menuitem_dash}`} />

      <div className={`${styles.menuitem_price}`}>
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className={`${styles.menuitem_sub}`}>
      <p className='p__opensans' style={{ color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
