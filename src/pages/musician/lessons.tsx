import React from "react"
import { HeadFC } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import { SEO } from "../../components/seo"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"

import * as styles from "./lessons.module.scss"

export default function LessonPage() {
  return (
    <div>
      <MaxWidthContainer>
        <section className={styles.header}>
          <h1>Lesson Page</h1>
          <hr></hr>
          <StaticImage
            src="../../images/music-elliot-profile_567.jpg"
            alt="pic"
            layout="constrained"
            width={300}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />
          <p>
            A performance page is in the works, until then you can shake your
            fist at the sky.
          </p>
        </section>
      </MaxWidthContainer>
    </div>
  )
}

export const Head: HeadFC<string> = () => (
  <SEO title="Musician | Lessons" />
)