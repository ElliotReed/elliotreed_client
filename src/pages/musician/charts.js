import React from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"

import { charts } from "../../data/data"

import chartStyles from "./charts.module.scss"
const ChartPage = () => {
  return (
    <Layout type="musician">
      <Head title="Musician | Charts" />
      <h1 className={chartStyles.pageTitle}>Charts</h1>
      <MaxWidthContainer>
        {charts.map(chart => {
          return (
            <ul className={chartStyles.container}>
              <h2 className={chartStyles.artist}>{chart.artist.name}</h2>
              {chart.artist.albums.map(album => {
                return (
                  <ul>
                    <h3 className={chartStyles.album}>{album.title}</h3>
                    {album.tracks.map(track => {
                      return (
                        <li key={track.number} className={chartStyles.link} title={`Follow link to open pdf`}>
                          <a href={track.link}>{track.title}</a>
                        </li>
                      )
                    })}
                  </ul>
                )
              })}
            </ul>
          )
        })}
      </MaxWidthContainer>
    </Layout>
  )
}

export default ChartPage
