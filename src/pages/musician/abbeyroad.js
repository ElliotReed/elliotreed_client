import React, { useState } from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"

import { show } from "../../data/abbeyroad"
import scoreImage from "../../images/scores.jpg"

import Styles from "./abbeyroad.module.scss"

const YouTube = ({ videoId }) => {
  const youTubeBaseURL = "https://www.youtube.com/embed/"
  const source = `${youTubeBaseURL}${videoId}`

  return (
    <div className={Styles.videoContainer}>
      <iframe
        src={source}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

const AbbeyRoadPage = () => {
  const showParts = useState(false)
  return (
    <Layout type="abbeyroad">
      <Head title="Musician | Abbey Road" />
      <div className={Styles.pageTitleContainer}>
        <h1 className={Styles.pageTitle}>
          Abbey Road / Beatles After The Beatles
        </h1>
      </div>
      <MaxWidthContainer>
        <section className={Styles.container}>
          {show.map(set => {
            return (
              <>
                <div className={Styles.setWrapper}>
                  <div className={Styles.setTitleWrapper}>
                    <h2>Set {set.set}</h2>
                    <h4>{set.title}</h4>
                  </div>
                  <ul className={Styles.songList}>
                    {set.songs.map(song => {
                      return (
                        <li className={Styles.song} key={song.position}>
                          <h3 className={Styles.songTitle}>{song.title}</h3>
                          <div className={Styles.songContent}>
                            {showParts && (
                              <div>
                                <h6>
                                  <small>Parts:</small>
                                </h6>
                                <ul className={Styles.partList}>
                                  {song.alex !== "" && (
                                    <li>
                                      Alex: <span>{song.alex}</span>
                                    </li>
                                  )}
                                  {song.elliot !== "" && (
                                    <li>
                                      Elliot: <span>{song.elliot}</span>
                                    </li>
                                  )}
                                  {song.steve !== "" && (
                                    <li>
                                      Steve: <span>{song.steve}</span>
                                    </li>
                                  )}
                                </ul>
                              </div>
                            )}
                            {song.link !== "" && (
                              <>
                                <h6>
                                  <small>Music:</small>
                                </h6>
                                <div className={Styles.linkContainer}>
                                  <a
                                    title={`Follow link to open pdf`}
                                    href={song.link}
                                  >
                                    <img src={scoreImage} alt="pdf link" />
                                  </a>
                                  <a
                                    className={Styles.link}
                                    title={`Follow link to open pdf`}
                                    href={song.link}
                                  >
                                    <h6>{song.title}</h6>
                                  </a>
                                </div>
                              </>
                            )}

                            <h6>
                              <small>Videos:</small>
                            </h6>
                            <ul className={Styles.videoList}>
                              {song.videos.length > 0 &&
                                song.videos.map(video => {
                                  return (
                                    <li>
                                      <YouTube videoId={video.id} />
                                      <label>{video.title}</label>
                                    </li>
                                  )
                                })}
                            </ul>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </>
            )
          })}
        </section>
      </MaxWidthContainer>
    </Layout>
  )
}

export default AbbeyRoadPage
