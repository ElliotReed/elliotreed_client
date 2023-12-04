import React from "react"

import { ContextProviderComponent } from "../../context/Context";

import { DesignNavbar } from "../Navbars";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

import * as styles from "../layout.module.scss"

export default function DesignLayout({ children }: Readonly<React.PropsWithChildren>) {
  let headerType = "developer";

  return (
    <ContextProviderComponent>
      <div className={styles.container}>
        <SiteHeader type={headerType}>
          <DesignNavbar />
        </SiteHeader>
        <div className={styles.content}>
          {children}
        </div>
        <SiteFooter />
      </div>
    </ContextProviderComponent>
  );
}