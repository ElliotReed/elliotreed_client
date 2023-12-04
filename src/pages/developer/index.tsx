import React from "react";
import { HeadFC, Link } from 'gatsby';

import ProfileHeader from "../../components/ProfileHeader";
import { Seo } from "../../components/SEO";

// import * as styles from "./developer.module.scss";
import * as styles from "../../layouts/Navbars/navbars.module.scss";;

export default function DeveloperPage() {
  return (
    <>
      <ProfileHeader type="developer" />
      <main>
        <Link
          to="/design/"
          activeClassName={styles.navList__linkActive}
          className={styles.navList__link}
        >
          Design System
        </Link>
      </main>
    </>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Developer" />
)