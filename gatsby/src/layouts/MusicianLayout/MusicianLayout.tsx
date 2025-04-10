import * as React from "react";

import { ContextProviderComponent } from "../../context/Context";

import { MusicianNavbar } from "../Navbars";
import Header from "../SiteHeader";
import Footer from "../SiteFooter/SiteFooter";
import ScoreHeader from "../../components/ScoreHeader";

import * as styles from "../layout.module.scss";

const MusicianLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  let type = "musician";

  return (
    <ContextProviderComponent>
      <div className={styles.container}>
        <Header type={type}>
          <MusicianNavbar />
        </Header>
        <div className={styles.content}>
          <ScoreHeader />
          {children}
        </div>
        <Footer type={type} />
      </div>
    </ContextProviderComponent>
  );
}

export default MusicianLayout
