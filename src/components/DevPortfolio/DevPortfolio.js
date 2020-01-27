import React, { Component } from "react"

import { UlClean } from "../UI/ulClean"
import styles from "./DevPortfolio.module.scss"

import { portfolioData } from "./data"

class DevPortfolio extends Component {
  render() {
    return (
      <div className={styles.container}>
        <UlClean>
          {portfolioData.map(item => {
            return (
              <li
                key={item.id}
                title="Click to open."
                className={styles.card}
              >
                <div className={styles.card__display}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt={item.project} />
                  </a>
                </div>
                <article className={styles.card__info}>
                  <h2>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.project}
                    </a>
                  </h2>
                  <p className={styles.blurb}>{item.blurb}</p>
                  <p>{item.description}</p>
                </article>
              </li>
            )
          })}
        </UlClean>
      </div>
    )
  }
}

export default DevPortfolio
