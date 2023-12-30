import * as React from "react";

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
          <NavigationHeaderLink to="/developer/articles">
            Articles
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/developer/contact">
            Contact
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/developer/portfolio">
            Portfolio
          </NavigationHeaderLink>
        </li>
      </ul>
    </nav>
  );
}