import React from "react"

import Head from "../../components/head"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import DevPortfolio from "../../components/DevPortfolio"
import styles from "./portfolio.module.scss"

const PortfolioPage = () => {
  return (
    <div>
      <Head title="Developer | Portfolio" />
      <MaxWidthContainer>
        <div className={styles.portfolioHeader}>
          <h1>Portfolio</h1>
          <hr></hr>
          <p>These are a few of the projects I have built.</p>
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer>
        <DevPortfolio />
      </MaxWidthContainer>
    </div>
  )
}

export default PortfolioPage
