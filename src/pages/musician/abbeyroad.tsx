import React, { useState } from "react"
import { HeadFC } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import { SEO } from "../../components/seo"
import Accordion from "../../components/UI/Accordion"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"

import { show } from "../../data/abbeyroad"

import * as styles from "./abbeyroad.module.scss"

interface VideoProps {
  id: string
  title: string
}

interface SongProps {
  position: number
  elliot: string
  steve: string
  alex: string
  title: string
  link: string
  videos: VideoProps[]
}

const Parts = ({ song }: { song: SongProps }) => {
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

const MusicContent = ({ song }: { song: SongProps }) => {
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
const MusicLink = ({ song }: { song: SongProps }) => {
  return (
    <>
      <Accordion title="Music:" content={<MusicContent song={song} />} />
    </>
  )
}

interface YouTubeProps {
  videoId: string;
  title: string;
}

const YouTube = ({ videoId, title }: YouTubeProps) => {
  const youTubeBaseURL = "https://www.youtube.com/embed/"
  const source = `${youTubeBaseURL}${videoId}`

  return (
    <div className={styles.videoContainer}>
      <iframe
        title={title}
        src={source}
        loading="lazy"
        allow="fullscreen"
      ></iframe>
    </div>
  )
}

const VideoContent = ({ song }: { song: SongProps }) => {
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

const Video = ({ song }: { song: SongProps }) => {
  return <Accordion title="Videos:" content={<VideoContent song={song} />} />
}

const AbbeyRoadPage = () => {
  const showParts = useState(false)
  return (
    <>
      <h1 className={styles.pageTitle}>
        Abbey Road / Beatles After The Beatles
      </h1>

      <MaxWidthContainer>
        <section className={styles.container}>
          {show.map((set) => {
            return (
              <div className={styles.setWrapper} key={set.set}>
                <div className={styles.setTitleWrapper}>
                  <h2>Set {set.set}</h2>
                  <h2>{set.title}</h2>
                </div>
                <ul className={styles.songList}>
                  {set.songs.map((song) => {
                    if (!song) {
                      return
                    }
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

export const Head: HeadFC<string> = () => (
  <SEO title="Musician | Abbey Road" />
)