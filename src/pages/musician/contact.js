import React from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"
import ContactForm from "../../components/ContactForm"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import contactPageStyles from "./contact.module.scss"
const ContactPage = () => {
  return (
    <Layout type="musician">
      <Head title="Musician | Contact" />
      <MaxWidthContainer>
      <ContactForm type='musician'/>
      </MaxWidthContainer>
    </Layout>
  )
}

export default ContactPage
