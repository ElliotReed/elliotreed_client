import React from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"
import DevPortfolio from "../../components/DevPortfolio"

const PortfolioPage = () => {
  return (
    <Layout type="developer">
      <Head title="Developer | Portfolio" />
      <h1>Portfolio Page</h1>
      <h2>These are a few of the projects I have built.</h2>
      <DevPortfolio />
    </Layout>
  )
}

export default PortfolioPage
