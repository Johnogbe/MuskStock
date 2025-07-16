import { useState } from "react";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>Your Logo</div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
      
      <div className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ""}`}>
        <ul className={styles.navList}>
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <li key={item} className={styles.navItem}>
              <a href="#" className={styles.navLink} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ""}`} 
        onClick={closeMenu} 
      />
    </nav>
  );
};

export default MobileNav;