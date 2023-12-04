import React from "react";

import { Link } from "gatsby";

import * as styles from "./navbars.module.scss";

export default function DeveloperNavbar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link
            to="/developer/about"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/developer/portfolio"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/developer/contact"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}