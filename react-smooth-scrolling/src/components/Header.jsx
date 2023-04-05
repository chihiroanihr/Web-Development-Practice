import React from "react";
import styles from "../styles/Header.module.css";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";

function Header() {
  const navLinks = ["Home", "Destinations", "Hotels", "Flights", "Bookings"];

  const { activeLinkId } = useContext(NavContext);
  console.log(activeLinkId);

  const renderNavLink = (content) => {
    const scrollToId = content.toLowerCase();

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <li key={content}>
        <button
          onClick={handleClickNav}
          className={activeLinkId === content ? styles.activeClass : ""}
        >
          {content}
        </button>
      </li>
    );
  };

  const handleClickLogo = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <h1 onClick={handleClickLogo}>Travel</h1>
          <nav>
            <ul>{navLinks.map((navLink) => renderNavLink(navLink))}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
