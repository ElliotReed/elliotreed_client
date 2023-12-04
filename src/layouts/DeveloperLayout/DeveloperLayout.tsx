import React from "react";

import { DeveloperNavbar } from "../Navbars";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

import * as styles from "../layout.module.scss";

const DeveloperLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  let headerType = "developer"

  return (
    <div className={styles.container}>
      <SiteHeader type={headerType}>
        <DeveloperNavbar />
      </SiteHeader>
      <div className={styles.content}>
        {children}
      </div>
      <SiteFooter />
    </div>
  )
}

export default DeveloperLayout
