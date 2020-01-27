import React from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"
import ContactForm from "../../components/ContactForm"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import styles from "./contact.module.scss"
const ContactPage = () => {
  return (
    <Layout type="developer">
      <Head title="Developer | Contact" />
      <MaxWidthContainer>
        <ContactForm type='developer'/>
      </MaxWidthContainer>
    </Layout>
  )
}

export default ContactPage
