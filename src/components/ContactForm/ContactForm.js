import React, { useState } from "react"

import * as styles from "./ContactForm.module.scss"

// const CONTACT_ROUTE_URL = "https://api.elliotreed.net/sendMessage";
const CONTACT_ROUTE_URL = "http://localhost:3066/sendMessage";

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

export default function ContactForm({ type }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
    type: type,
  });

  const [messageState, setMessageState] = useState({
    new: true,
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setMessageState(prev => ({ ...prev, "submitting": true, "new": false }));
    const response = await sendEmail(CONTACT_ROUTE_URL, message);

    if (!response.error) {
      setMessageState(prev => ({ ...prev, "submitting": false, "success": true }));
      return
    }

    setMessageState(prev => ({ ...prev, "submitting": false, "error": true }));
    setErrorMessage(response.error.message);
    console.log(response.error);
  }

  return (
    <form className={styles.header} onSubmit={handleSubmit}>
      <h1>Contact</h1>

      <hr></hr>

      {messageState.submitting && <Sending />}

      {messageState.success && (
        <Success>
          <RenewFormButton setMessage={setMessage} setMessageState={setMessageState} />
        </Success>
      )}

      {messageState.error && (
        <ErrorMessage errorMessage={errorMessage}>
          <RenewFormButton setMessage={setMessage} setMessageState={setMessageState} />
        </ErrorMessage>
      )}

      {messageState.new && (
        <>
          <p>Send me a message!</p>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={message.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={message.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              onChange={handleChange}
              value={message.message}
              required
            />
          </div>
          <input type="submit" value="Send Message" />
        </>
      )}
    </form>
  )
}

function ErrorMessage({ errorMessage, children }) {
  return (
    <div>
      <p>There was an error sending your message!</p>

      <p>{errorMessage}</p>

      {children}
    </div>
  );
};

function Success({ children }) {
  return (
    <div>
      <p>Your message has been sent!</p>
      {children}
    </div>
  );
};

function RenewFormButton({ setMessage, setMessageState }) {
  return (
    <button type="button" onClick={() => {
      setMessageState(prev => (
        {
          ...prev,
          new: true,
          success: false,
          error: false,
        }
      ))
      setMessage(prev => (
        {
          ...prev,
          message: '',
        }
      ))
    }
    }>Send another message</button>);
}

function Sending() {
  return (
    <div>Sending...</div>
  );
}