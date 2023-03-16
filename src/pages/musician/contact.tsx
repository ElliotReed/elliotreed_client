import React from "react"
import { HeadFC } from 'gatsby'

import ContactForm from "../../components/ContactForm"
import { SEO } from "../../components/seo"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"


export default function ContactPage() {
  return (
    <div>
      <MaxWidthContainer>
        <ContactForm type="musician" />
      </MaxWidthContainer>
    </div>
  )
}

export const Head: HeadFC<string> = () => (
  <SEO title="Musician | Contact" />
)