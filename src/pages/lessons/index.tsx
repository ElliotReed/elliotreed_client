import React from "react";
import { HeadFC } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import { Map } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

import ContactForm from "../../components/ContactForm";
import ExternalLink from "../../components/ExternalLink";
import Heading from "../../components/Heading";
import Paragraph from "../../components/UI/Paragraph";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import Seo from "../../components/SEO";

import * as styles from "./lessons.module.scss";

interface TwoColumnGridProps {
  smallSide: "left" | "right",
  children: React.ReactNode,
}

function TwoColumnGrid({ smallSide, children }: Readonly<TwoColumnGridProps>) {
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
        <Heading level={1}>
          <span>Guitar Lessons</span>
          <span className={styles.subHeading}>
            <em>with Elliot Reed</em>
          </span>
        </Heading>

        <Paragraph>
          Are you ready to elevate your guitar playing to new heights? Look no further! I am a seasoned guitar virtuoso with 35+ years of experience, and I am here to guide you on your musical journey. Whether you're a beginner looking to strum your first chords or an advanced player seeking to refine your technique, I offer personalized lessons that cater to your skill level and musical aspirations.
        </Paragraph>
        <Heading level={2} size={3}>I Offer</Heading>
      </MaxWidthContainer>

      <ul className={styles.reasonList}>
        <li>
          <MaxWidthContainer>
            <Heading level={3} size={4}>Expertise:</Heading>
            <Paragraph>
              With 35+ years of playing and teaching experience, I bring a wealth of knowledge and expertise to every lesson. I have honed my skills through years of performing and instructing, and I am dedicated to helping you achieve your musical goals.
            </Paragraph>
            <ExternalLink to="https://open.spotify.com/artist/3ZJrLqiSpAZueYPclk65Cl?si=SvjEqUhZRNylCPcb1q8HAQ"
            >
              <FontAwesomeIcon icon={faSpotify} /> Gypsy Swing Revue on Spotify
            </ExternalLink>
          </MaxWidthContainer>
        </li>
      </ul>

      <div className={styles.genreList}>
        <MaxWidthContainer>
          <span>
            I've performed professionally in these styles:
          </span>

          <ul>
            <li>Jazz</li>
            <li>Gypsy Jazz</li>
            <li>Rock</li>
            <li>Pop</li>
            <li>Country</li>
            <li>Western Swing</li>
            <li>Reggae</li>
            <li>Indie</li>
            <li>Theater</li>
            <li>Classical</li>
          </ul>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>

        <ul className={styles.reasonList}>
          <li>
            <Heading level={3} size={4}>Personalized Lessons:</Heading>
            <Paragraph>
              No two students are the same, and I tailor my lessons to meet your individual needs and aspirations. Whether you're interested in acoustic or electric guitar, jazz, rock or blues, theory or technique, I will create a customized curriculum that suits your preferences and helps you progress at your own pace.
            </Paragraph>
          </li>

          <li>
            <Heading level={3} size={4}>Versatility:</Heading>
            <Paragraph>
              From basic chord progressions to intricate solos, I cover a wide range of musical styles and techniques. Whether you're into classic rock, jazz, blues, or contemporary pop, I can help you master the skills needed to play your favorite genres.
            </Paragraph>
          </li>

          <li>
            <Heading level={3} size={4}>Flexible Scheduling:</Heading>
            <Paragraph>
              Life can be busy, but that shouldn't hinder your musical aspirations. I offer flexible scheduling to accommodate your busy lifestyle. Whether you prefer weekly, bi-weekly, or monthly lessons, we can find a schedule that works for you.
            </Paragraph>

            <ul className={styles.schedule}>
              <li>
                <span className={styles.schedule__day}>Tuesday</span>
                <em>evenings</em>
                <span className={styles.schedule__time}>5pm - 9pm</span>
              </li>
              <li>
                <span className={styles.schedule__day}>Thursday</span>
                <em>evenings</em>
                <span className={styles.schedule__time}>5pm - 9pm</span>
              </li>
              <li>
                <span className={styles.schedule__day}>Saturday</span>
                <span className={styles.schedule__time}>9am - 6pm</span>
              </li>
              <li>
                <span className={styles.schedule__day}>Sunday</span>
                <span className={styles.schedule__time}>9am - 6pm</span>
              </li>
            </ul>
          </li>

          <li>
            <Heading level={3} size={4}>In-Home Lessons:</Heading>
            <TwoColumnGrid smallSide="right">
              <div>
                <Paragraph>
                  For added convenience and comfort, I offer in-home lessons within Littleton, CO. Enjoy the benefits of personalized instruction in the comfort of your own home.
                </Paragraph>
                <ul className={styles.inHomeList}>
                  <li>Avoid traffic</li>
                  <li>No drop off and pick up, or waiting</li>
                </ul>
              </div>

              <div className={styles.parentBlurb}>
                <StaticImage
                  className={styles.parentBlurb__image}
                  src="./ellie-daddy-lesson.jpg"
                  alt="pic"
                  layout="constrained"
                  // aspectRatio={4 / 3}
                  width={150}
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                />
                <Paragraph className={styles.parentBlurb__text}>
                  As the father of an Arapahoe High School student/musician, I understand having to drive all over town for various activites. Wouldn't it be nice if the lessons <strong>came to you</strong>?
                </Paragraph></div>
            </TwoColumnGrid>


            <div className={styles.pricing}>
              <Heading level={4} size={5}>Pricing</Heading>
              <ul>
                <li>
                  <span>1/2 hour lesson</span><span className={styles.pricing__price}>$30</span>
                </li>
                <li>
                  <span>1 hour lesson</span><span className={styles.pricing__price}>$55</span>
                  <span>, <small>(may be split between 2 students)</small></span>
                </li>
              </ul>
            </div>

            <TwoColumnGrid smallSide="right">
              <Paragraph size="sm">
                <em>
                  Between <strong>Santa Fe Dr</strong> and <strong>University Blvd</strong>, <strong>Littleton Blvd</strong> and <strong>County Line Rd</strong>, additional charges for greater distances.
                </em>
              </Paragraph>

              <div className={styles.map}>
                <Map
                  provider={osm}
                  height={200}
                  defaultCenter={[39.5907927, -104.9968363]}
                  defaultZoom={12} />
              </div>
            </TwoColumnGrid>


          </li>

          <li>
            <Heading level={3} size={4}>Contact Me:</Heading>
            <Paragraph>
              Ready to embark on your musical journey? Contact me to schedule your first lesson or to inquire about in-home lesson availability. Let's make music together!
            </Paragraph>

            {/* [Contact Information]
          Email: [YourEmail@example.com]
          Phone: [Your Phone Number]

          [Location]
          City, State

          Follow me on [Social Media Links] for updates, tips, and musical inspiration!

          [Facebook] [Twitter] [Instagram] [YouTube] */}


          </li>
          <Paragraph>
            You can call/text me at 303.745.7044, or send me an email.
          </Paragraph>
        </ul>
        <ContactForm type="musician" customHeader="" />
        <Paragraph>
          Don't just <em>play</em> the guitar – <strong>master</strong> it!
        </Paragraph>
      </MaxWidthContainer>
    </main >
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Lessons" />
);
