import Api from "api/api";
import React from "react";
import styles from "styles/components/Footer.module.css";

function Footer() {
  // Email 복사
  const copyEmail = () => {
    const textarea = document.createElement("textarea");
    textarea.value = "dvlprjw@gmail.com";
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied!");
  };

  const toGitHub = () => {
    Api.visited({
      url: "https://github.com/ParkJeongwoong",
      who: router.asPath.split("who=")[1],
      lastPage: "Footer",
    });
  };

  return (
    <div className={styles.Footer}>
      <div onClick={toGitHub} className={styles.Footer__github}>
        Github : <a href="https://github.com/ParkJeongwoong">ParkJeongwoong</a>
      </div>
      <div className={styles.Footer__email}>
        Contact : <span onClick={copyEmail}>dvlprjw@gmail.com</span>
      </div>
    </div>
  );
}

export default Footer;
