import React from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import contactPageStyles from "./contact.module.scss"
const ContactPage = () => {
  return (
    <Layout type="developer">
      <Head title="Developer | Contact" />
      <MaxWidthContainer>
        <section className={contactPageStyles.header}>
          <h1>Contact Page</h1>
          <hr></hr>
          <p>
            A contact form is in the works, until then you can email me:
          </p>
          <p>elliot_dev</p>
          <p>at elliotreed.net,</p>
          <br></br>
          <p>or give me a call:</p>
          <p>303</p>
          <p>745.7944</p>
        </section>
      </MaxWidthContainer>
    </Layout>
  )
}

export default ContactPage
