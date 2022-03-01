import images from '../../constants/images'

import styles from './AboutUs.module.scss';

const AboutUs = () => (
  <div id='about' className={`${styles.aboutus} bg flex__center section__padding`}>
    <div className={`${styles.aboutus_overlay} flex__center`}>
      <img src={images.G.src} alt="G Letter" />
    </div>
    <div className={`${styles.aboutus_content} flex__center`}>
      <div className={`${styles.aboutus_content_about}`}>
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon.src} alt="about_spoon" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>

      <div className={`${styles.aboutus_content_knife} flex__center`}>
        <img src={images.knife.src} alt="about_knife" />
      </div>

      <div className={`${styles.aboutus_content_history}`}>
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon.src} alt="about_spoon" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
