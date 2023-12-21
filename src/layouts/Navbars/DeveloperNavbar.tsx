import React from "react";

import { Link } from "gatsby";

import NavigationHeaderLink from "../../components/NavigationHeaderLink";

import * as styles from "./navbars.module.scss";

export default function DeveloperNavbar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavigationHeaderLink to="/developer/about">
            About
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/developer/portfolio">
            Portfolio
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/developer/contact">
            Contact
          </NavigationHeaderLink>
        </li>
      </ul>
    </nav>
  );
}