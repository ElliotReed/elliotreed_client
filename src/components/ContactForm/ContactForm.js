import React, { useState, useRef, useLayoutEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap/gsap-core"

import ButtonGroup from "../UI/ButtonGroup/ButtonGroup";
import Button from "../UI/Button";

import * as styles from "./ContactForm.module.scss"

// const CONTACT_ROUTE_URL = "https://api.elliotreed.net/sendMessage";
const CONTACT_ROUTE_URL = "http://localhost:3066/v1/send/contact";

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
  const [directiveText, setDirectiveText] = useState("Send me a message!");
  const [sendButtonText, setSendButtonText] = useState('Send Message')
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
    type: type,
  });

  const [formState, setFormState] = useState({
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
    setFormState(prev => ({ ...prev, "submitting": true, "new": false }));
    setSendButtonText("Sending...")

    try {
      const response = await sendEmail(CONTACT_ROUTE_URL, message);
      console.log(response);
      if (!response.error) {
        console.log(response.status);
        setFormState(prev => ({ ...prev, "submitting": false, "success": true }));
        setDirectiveText(response.message)
        setSendButtonText("Send Another Message")
        handleReset()
        return
      }

      setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
      console.log(response.error);
      throw new Error("There was an error sending your message!")
    }
    catch (error) {
      setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
      setDirectiveText(error.message || "There was a server error!");
      setSendButtonText("Try Again");
    }
  }

  const handleReset = () => {
    setFormState(prev => (
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

  return (
    <form className={styles.header} onSubmit={handleSubmit}>
      <h1>Contact</h1>

      <hr />

      <p>
        {directiveText}
      </p>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={message.name}
          onChange={handleChange}
          disabled={formState.submitting}

        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          disabled={formState.submitting}
          required
          onChange={handleChange}
          value={message.email}
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
          disabled={formState.submitting}
          required
        />
      </div>
      <ButtonGroup>
        <Button type="submit">
          <Sending shouldAnimate={formState.submitting} />
          {sendButtonText}
        </Button>
      </ButtonGroup>
    </form>
  )
}

function Sending({ shouldAnimate = false }) {
  const mail = useRef();
  const container = useRef();

  useLayoutEffect(() => {
    if (shouldAnimate) {
      const xDuration = 1.5;
      const tl = gsap.timeline({
        repeat: -1,
      })
      let ctx = gsap.context(() => {
        tl.to(mail.current, {
          rotation: 360,
          duration: xDuration / 2,
          ease: 'none',
          repeat: 3,
        }, "<");
        tl.to(mail.current, {
          scale: 1.29,
          duration: xDuration / 2,
          yoyo: true,
          repeat: 3,
          ease: 'none',
        }, "<")
      })

      return () => {
        ctx.revert()
      }
    }
  },
    [shouldAnimate])
  return (
    <div ref={container} className={styles.sending}>
      <FontAwesomeIcon ref={mail} icon={faEnvelope} />
    </div>
  );
}