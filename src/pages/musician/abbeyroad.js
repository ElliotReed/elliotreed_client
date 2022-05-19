import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Head from "../../components/head"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import Accordion from "../../components/UI/Accordion"

import { show } from "../../data/abbeyroad"

import * as styles from "./abbeyroad.module.scss"

const Parts = ({ song }) => {
  return (
    <div className={styles.partWrapper}>
      <h6>
        <small>Parts:</small>
      </h6>
      <ul className={styles.partList}>
        {song.alex !== "" && (
          <li key="1">
            <span>Alex:</span>
            <span className={styles.part}>{song.alex}</span>
          </li>
        )}
        {song.elliot !== "" && (
          <li key="2">
            <span>Elliot:</span>
            <span className={styles.part}>{song.elliot}</span>
          </li>
        )}
        {song.steve !== "" && (
          <li key="3">
            <span>Steve:</span>
            <span className={styles.part}>{song.steve}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

const MusicContent = ({ song }) => {
  return (
    <div className={styles.linkContainer}>
      <a title={`Follow link to open pdf`} href={song.link}>
        <StaticImage src="../../images/scores.jpg" alt="pdf link" />
      </a>
      <a
        className={styles.link}
        title={`Follow link to open pdf`}
        href={song.link}
      >
        <h6>{song.title}</h6>
      </a>
    </div>
  )
}
const MusicLink = ({ song }) => {
  return (
    <>
      <Accordion title="Music:" content={<MusicContent song={song} />} />
    </>
  )
}

const YouTube = ({ videoId, title }) => {
  const youTubeBaseURL = "https://www.youtube.com/embed/"
  const source = `${youTubeBaseURL}${videoId}`

  return (
    <div className={styles.videoContainer}>
      <iframe
        title={title}
        src={source}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

const VideoContent = ({ song }) => {
  return (
    <ul className={styles.videoList}>
      {song.videos.length > 0 &&
        song.videos.map((video) => {
          return (
            <li key={video.id}>
              <YouTube videoId={video.id} title={video.title} />
              <label>{video.title}</label>
            </li>
          )
        })}
    </ul>
  )
}

const Video = ({ song }) => {
  return <Accordion title="Videos:" content={<VideoContent song={song} />} />
}

const AbbeyRoadPage = () => {
  const showParts = useState(false)
  return (
    <>
      <Head title="Musician | Abbey Road" />
      <h1 className={styles.pageTitle}>
        Abbey Road / Beatles After The Beatles
      </h1>

      <MaxWidthContainer>
        <section className={styles.container}>
          {show.map((set) => {
            return (
              <div className={styles.setWrapper}>
                <div className={styles.setTitleWrapper}>
                  <h2>Set {set.set}</h2>
                  <h2>{set.title}</h2>
                </div>
                <ul className={styles.songList}>
                  {set.songs.map((song) => {
                    return (
                      <li className={styles.song} key={song.position}>
                        <h3 className={styles.songTitle}>{song.title}</h3>
                        <div className={styles.songContent}>
                          {showParts && <Parts song={song} />}
                          {song.link !== "" && <MusicLink song={song} />}
                          {song.videos.length > 0 && <Video song={song} />}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </section>
      </MaxWidthContainer>
    </>
  )
}

export default AbbeyRoadPage
