import React from "react"

import Head from "../../components/head"
import ContactForm from "../../components/ContactForm"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
// import contactPageStyles from "./contact.module.scss"
const ContactPage = () => {
  return (
    <div>
      <Head title="Musician | Contact" />
      <MaxWidthContainer>
        <ContactForm type="musician" />
      </MaxWidthContainer>
    </div>
  )
}

export default ContactPage
