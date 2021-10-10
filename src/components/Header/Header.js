import React, { useState } from "react";
import Link from "next/link";
import styles from "styles/components/Header.module.css";

function Header() {
  const [onMove, setOnMove] = useState(false);

  function logoAnimation(event) {
    if (!onMove) {
      setOnMove(true);

      const element = event.target;
      const animationType = parseInt((Math.random() * 1000) % 10) % 3;
      function endAnimation() {
        element.className = `${styles.logo}`;
      }

      if (animationType) {
        if (animationType === 1) {
          element.className = `${styles.slideOutLeft}`;
          element.addEventListener("animationend", endAnimation);
        } else {
          element.className = `${styles.hinge}`;
          element.addEventListener("animationend", endAnimation);
        }

        setTimeout(() => {
          element.className = `${styles.zoomInDown}`;
          element.addEventListener("animationend", endAnimation);
        }, 900);
      } else {
        element.className = `${styles.bounce}`;
        element.addEventListener("animationend", endAnimation);
      }

      setOnMove(false);
    }
  }

  return (
    <div className={styles.Header}>
      <div className={styles.Header__styling}>
        <img src="/myLogo_transp.png" alt="logo" onClick={logoAnimation} />
      </div>
      <Link href="/">
        <a className={styles.Header__word}>Home</a>
      </Link>
      <Link href="/profile">
        <a className={styles.Header__word}>Profile</a>
      </Link>
      <Link href="/articles">
        <a className={styles.Header__word}>Articles</a>
      </Link>
      <Link href="/archives">
        <a className={styles.Header__word}>Archives</a>
      </Link>
      <div className={styles.Header__styling_Reverse} />
    </div>
  );
}

export default Header;
