import React, { Component } from "react"

import { UL_Clean } from "../UI/UL_Clean"
import devPortfolioStyles from "./DevPortfolio.module.scss"

import { portfolioData } from "./data"

class DevPortfolio extends Component {
  render() {
    return (
      <div className={devPortfolioStyles.portfolioContainer}>
        <UL_Clean>
          {portfolioData.map(item => {
            return (
              <li
                key={item.id}
                title="Click to open."
                className={devPortfolioStyles.card}
              >
                <div className={devPortfolioStyles.card__display}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt={item.project} />
                  </a>
                </div>
                <article className={devPortfolioStyles.card__info}>
                  <h2>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.project}
                    </a>
                  </h2>
                  <p className={devPortfolioStyles.blurb}>{item.blurb}</p>
                  <p>{item.description}</p>
                </article>
              </li>
            )
          })}
        </UL_Clean>
      </div>
    )
  }
}

export default DevPortfolio
