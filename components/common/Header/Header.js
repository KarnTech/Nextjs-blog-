import styles from './header.module.css'



export function Header() {
  return (
    <header>
      <div className={styles.header}>
          <a className={styles.header__title}>The Review Theory</a>
        <div className={styles.header__pages}>
          <div className={styles.header__menu}>Menu</div>
          <div className={styles.header__menu}>About Us</div>
          <div className={styles.header__menu}>Contact Us</div>
          <div className={styles.header__menu}>Sign up</div>
        </div>        
      </div>
      <div className = {styles.header__image}>
        <img className = {styles.header__frontimage} src="https://ak-d.tripcdn.com/images/100i12000000t464t9CFA.jpg" alt ="" />
      </div>
    </header>
  )
}