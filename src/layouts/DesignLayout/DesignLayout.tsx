import React from "react"

import * as styles from "./design-layout.module.scss"

export default function DesignLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className={styles.designLayout}>
      <header >
        <a className={styles.designLink} href="/design">Design System</a>
        <nav>
          <ul>
            <li><a href="/design/colors">Colors</a></li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}