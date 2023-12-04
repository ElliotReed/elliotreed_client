import React from "react";

import { Link } from "gatsby";

import * as styles from "./navbars.module.scss";

export default function DesignNavbar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link
            to="/design/colors"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Colors
          </Link>
        </li>
        <li>
          <Link
            to="/design/typography"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Typography
          </Link>
        </li>
      </ul>
    </nav>
  )
}