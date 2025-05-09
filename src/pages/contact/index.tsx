import React from "react"
import { HeadFC } from 'gatsby'

import ContactForm from "../../components/ContactForm"
import Seo from "../../components/SEO"
import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer"


export default function ContactPage() {
  return (
    <main>
      <MaxWidthContainer>
        <ContactForm />
      </MaxWidthContainer>
    </main>
  )
}

export const Head: HeadFC<string> = () => (
  <Seo
    title="Contact"
    description="Contact me for guitar lessons, arrangements, compositions, freelance work, or just to say hello."
  />
)