import React, { useState } from "react"

import styles from "./ContactForm.module.scss"

const ContactForm = ({ type }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    setSubmitted(true)
    e.preventDefault()
    const response = await sendEmail("https://api.elliotreed.net//sendMessage", {
      name: name,
      email: email,
      message: message,
      type: type,
    })

    if (response.mail === "success") {
      setSuccess(true)
    }
  }

  async function sendEmail(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  }

  return (
    <section className={styles.header}>
      <h1>Contact</h1>
      <hr></hr>
      {submitted && !success && <div>Sending...</div>}
      {submitted && success && <div>Your message has been sent!</div>}
      {!submitted && !success && (
        <>
          <p>Send me a message!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>
            <input type="submit" value="Send Message" />
          </form>
        </>
      )}
    </section>
  )
}

export default ContactForm
