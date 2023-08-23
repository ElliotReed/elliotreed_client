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
  const [errorMessage, setErrorMessage] = useState("");
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

    try {
      const response = await sendEmail(CONTACT_ROUTE_URL, message);

      if (!response.error) {
        console.log(response);
        setFormState(prev => ({ ...prev, "submitting": false, "success": true }));
        return
      }

      if (response.error) {
        setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
        setErrorMessage("There was an error sending your message!");
        console.log(response.error);
      }
    } catch (error) {
      setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
      setErrorMessage("There was a server error!");
    }
  }

  return (
    <form className={styles.header} onSubmit={handleSubmit}>
      <h1>Contact</h1>

      <hr></hr>

      {formState.submitting && <Sending />}

      {formState.success && (
        <Success>
          <RenewFormButton setMessage={setMessage} setMessageState={setFormState} />
        </Success>
      )}

      {formState.error && (
        <ErrorMessage errorMessage={errorMessage}>
          <RenewFormButton setMessage={setMessage} setMessageState={setFormState} />
        </ErrorMessage>
      )}

      <div>
        <p>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>Send me a message!
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
            required
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
            disabled={!formState.submitting}
            required
          />
        </div>
        <ButtonGroup>
          <Button type="submit">
            {!formState.submitting ? <Sending /> : "Send Message"}
          </Button>

        </ButtonGroup>
      </div>
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
  const mail = useRef();
  const container = useRef();

  useLayoutEffect(() => {
    const xDuration = 1.5;
    const tl = gsap.timeline({
      repeat: -1,
    })
    let ctx = gsap.context(() => {
      tl.to(mail.current, {
        x: () => container.current.clientWidth - (mail.current.clientWidth) * 2,
        duration: xDuration,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      });
      tl.to(mail.current, {
        rotation: 360,
        duration: xDuration / 2,
        ease: 'none',
        repeat: 3,
      }, "<");
      tl.to(mail.current, {
        scale: 2,
        duration: xDuration / 2,
        yoyo: true,
        repeat: 3,
        ease: 'none',
      }, "<")
    })

    return () => {
      ctx.revert()
    }
  },
    [mail])
  return (
    <div className={styles.sending}>
      <p>Sending...</p>
      <div ref={container}><FontAwesomeIcon ref={mail} icon={faEnvelope} /></div>
    </div>
  );
}