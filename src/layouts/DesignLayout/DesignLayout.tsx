import React from "react"

import { Link } from "gatsby";

import * as styles from "./design-layout.module.scss"

export default function DesignLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className={styles.designLayout}>
      <header >
        <Link className={styles.designLink} to="/design">Design System</Link>
        <nav>
          <ul>
            <li><Link to="/design/colors">Colors</Link></li>
            <li><Link to="/design/typography">Typography</Link></li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}