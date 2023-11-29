import React from "react"
import { HeadFC } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import { Map } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'

import cx from "classnames";
import { Seo } from "../../../components/SEO"

import ContactForm from "../../../components/ContactForm"
import Heading from "../../../components/Heading/Heading"
import MaxWidthContainer from "../../../components/MaxWidthContainer/MaxWidthContainer"
import Paragraph from "../../../components/UI/Paragraph/Paragraph"


import * as styles from "./lessons.module.scss";

interface TwoColumnGridProps {
  smallSide: "left" | "right",
  children: React.ReactNode,
}

function TwoColumnGrid({ smallSide, children }: TwoColumnGridProps) {
  let style = styles.left;
  if (smallSide === "right") {
    style = styles.right;
  }

  return (
    <div className={cx(styles.twoColumnGrid, style)}>
      {children}
    </div>
  );
}

export default function LessonPage() {
  return (
    <main className={styles.lessonPage}>
      <MaxWidthContainer>
        <Heading level={1}>Guitar lessons <em>in your home</em>
          <span className={styles.subHeading}>Littleton, CO</span>
        </Heading>

        <TwoColumnGrid smallSide="left">

          <StaticImage
            className={styles.image}
            src="../../../images-possible/ellie-daddy-lesson.jpg"
            alt="pic"
            layout="constrained"
            aspectRatio={4 / 3}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />

          <Paragraph>
            As the father of an Arapahoe High School student and musician, I understand having to drive all over town for various activites. Wouldn't it be nice if the lessons <strong>came to you</strong>?
          </Paragraph>
        </TwoColumnGrid>



        <Heading level={2}>
          As affordable as going to lessons<small>*</small>
        </Heading>

        <ul className={styles.listDefault}>
          <li>Avoid traffic</li>
          <li>No drop off and pick up, or waiting</li>
          <li>The comfort of your own home</li>
        </ul>

        <TwoColumnGrid smallSide="right">
          <Paragraph>
            <em>
              *Between <strong>Santa Fe Dr</strong> and <strong>University Blvd</strong>, <strong>Littleton Blvd</strong> and <strong>County Line Rd</strong>, additional charges for greater distances.
            </em>
          </Paragraph>

          <div className={styles.map}>
            <Map
              provider={osm}
              height={300}
              defaultCenter={[39.5907927, -104.9968363]}
              defaultZoom={12}
            />
          </div>
        </TwoColumnGrid>

        <Paragraph>35+ years of experience!</Paragraph>

        <Paragraph>
          Studied music at Casper College and the University of New Mexico.</Paragraph>
      </MaxWidthContainer>

      <div className={styles.genreList}>
        <MaxWidthContainer>
          <Heading level={3} color="light">I've performed professionally in these styles:</Heading>
          <ul>
            <li>Jazz</li>
            <li>Gypsy Jazz</li>
            <li>Rock</li>
            <li>Pop</li>
            <li>Country</li>
            <li>Western Swing</li>
            <li>Reggae</li>
            <li>Indie</li>
          </ul>
        </MaxWidthContainer>
      </div>

      <MaxWidthContainer>

        <Heading level={3}>Pricing</Heading>
        <ul>
          <li>1/2 hour lesson <span>$30</span></li>
          <li>1 hour lesson <span>$55</span>
            <p>Can be spilt between 2 students</p>
          </li>
        </ul>



        <Heading level={3}>I teach</Heading>

        <ul>
          <li>Tuesday evenings <span>5:00pm - 9:pm</span></li>
          <li>Thursday evenings <span>5:00pm - 9:pm</span></li>
          <li>Saturday <span>9:am - 6:00pm</span></li>
          <li>Sunday <span>9:am - 6:00pm</span></li>
        </ul>

        <Paragraph>You can call/text me at 303.745.7044, or send me an email with the form below.</Paragraph>
        <ContactForm type="musician" />
      </MaxWidthContainer>
    </main>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Lessons | Elliot Reed | Musician" />
)