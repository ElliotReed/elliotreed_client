import React from "react";
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import MaxWidthContainer from "../../components/MaxWidthContainer";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import ProfileHeader from "../../components/ProfileHeader";
import { Seo } from "../../components/SEO";

import * as styles from "./developer.module.scss";

export default function DeveloperPage() {
  return (
    <>
      <ProfileHeader type="developer" />
      <MaxWidthContainer>
        <main className={styles.developerContent}>
          <LinkCard to="/developer/clients/">
            <StaticImage
              className={styles.image}
              src="./dev-client-card.jpg"
              alt="pic"
              layout="constrained"
              width={300}
              aspectRatio={7 / 5}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
            <CardTitle>
              Hire me to build a website.
            </CardTitle>
          </LinkCard>
          <LinkCard to="/developer/organization/">
            <StaticImage
              className={styles.image}
              src="./dev-team-card.jpg"
              alt="pic"
              layout="constrained"
              width={300}
              aspectRatio={7 / 5}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
            <CardTitle>Hire me for your team.</CardTitle>
          </LinkCard>
        </main>
      </MaxWidthContainer>
    </>
  );
}

interface CardProps {
  children: React.ReactNode,
  to: string,
}

function LinkCard({ children, to }: Readonly<CardProps>) {
  return (
    <Link to={to} className={styles.linkCard}>
      {children}
    </Link>
  );
}

function CardTitle({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Paragraph>
      {children}
    </Paragraph>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Developer" />
)