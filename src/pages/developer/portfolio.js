import React from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import DevPortfolio from "../../components/DevPortfolio"
import portfolioStyles from "./portfolio.module.scss"

const PortfolioPage = props => {
  return (
    <Layout type="developer">
      <Head title="Developer | Portfolio" />
      <MaxWidthContainer>
        <div className={portfolioStyles.portfolioHeader}>
          <h1>Portfolio</h1>
          <hr></hr>
          <p>These are a few of the projects I have built.</p>
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer>
        <DevPortfolio />
      </MaxWidthContainer>
    </Layout>
  )
}

export default PortfolioPage
