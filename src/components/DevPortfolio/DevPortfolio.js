import React, { Component } from "react"

import devPortfolioStyles from "./DevPortfolio.module.scss"

import { portfolioData } from "./data"

class DevPortfolio extends Component {
  render() {
    return (
      <div className={devPortfolioStyles.portfolioContainer}>

        <ul>
          {portfolioData.map(item => {
            return (
              <li key={item.id}>
                <div className={devPortfolioStyles.card}>
                  {/* <a href={item.url} target="_blank" rel="noopener noreferrer"> */}
                    <img src={item.image} alt={item.project}/>
                    <div className={devPortfolioStyles.cardContainer}>
                      <h4>{item.project}</h4>
                      <p>{item.blurb}</p>
                    </div>
                  {/* </a> */}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DevPortfolio
