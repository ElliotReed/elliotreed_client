import React from "react"
import { HeadFC } from 'gatsby'

import ContactForm from "../../components/ContactForm"
import { SEO } from "../../components/SEO/Seo"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"

export default function ContactPage() {
  return (
    <div>
      <MaxWidthContainer>
        <ContactForm type="developer" />
      </MaxWidthContainer>
    </div>
  )
}

export const Head: HeadFC<string> = () => (
  <SEO title="Developer | Contact" />
)