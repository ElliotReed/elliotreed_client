import React from "react";
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import ProfileHeader from "../../components/ProfileHeader";
import { Seo } from "../../components/SEO";

import * as styles from "./developer.module.scss";
import MaxWidthContainer from "../../components/MaxWidthContainer";

export default function DeveloperPage() {
  return (
    <>
      <ProfileHeader type="developer" />
      <MaxWidthContainer>
        <main className={styles.developerContent}>
          <Card
            title="Hire me to build a website."
            to="/developer/clients/"
          >
            <StaticImage
              className={styles.image}
              src="../../images/dev-client-card.jpg"
              alt="pic"
              layout="constrained"
              width={300}
              aspectRatio={7 / 5}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
          </Card>
          <Card
            title="Hire me for your team."
            to="/developer/hire/"
            imageSrc="../../images/dev-team-card.jpg"
          >
            <StaticImage
              className={styles.image}
              src="../../images/dev-team-card.jpg"
              alt="pic"
              layout="constrained"
              width={300}
              aspectRatio={7 / 5}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
          </Card>
        </main>
      </MaxWidthContainer>
    </>
  );
}

interface CardProps {
  children: React.ReactNode,
  title: string,
  to: string,
  imageSrc: string,
}

function Card({ children, title, to, imageSrc }: Readonly<CardProps>) {
  return (
    <div>
      <Link
        to={to}
      >

        {children}
        <p>{title}</p>
      </Link>
    </div>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Developer" />
)