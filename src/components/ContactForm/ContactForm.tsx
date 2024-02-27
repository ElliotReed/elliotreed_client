import React, { useState, ChangeEvent, FormEvent } from "react";

import Sending from "./Sending";
import ButtonGroup from "../UI/ButtonGroup/ButtonGroup";
import Button from "../UI/Button";

import * as styles from "./contact-form.module.scss"

const CONTACT_ROUTE_URL = process.env.CONTACT_ROUTE_URL;

const buttonText = {
  sendAnother: "Send Another Message",
  sendAgain: "Try Again",
  sending: "Sending..."
}

async function sendEmail(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
  return await response.json();
}

type ContactFormProps = {
  type?: string
  customHeader: React.ReactElement | null
}

interface FormState {
  dirty: boolean;
  submitting: boolean;
  success: boolean;
  error: boolean;

}

export default function ContactForm({ type, customHeader = null }: Readonly<ContactFormProps>) {
  const [directiveText, setDirectiveText] = useState("Send me a message!");
  const [sendButtonText, setSendButtonText] = useState('Send Message')
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
    type: type,
  });

  const [formState, setFormState] = useState<FormState>({
    dirty: true,
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState(prev => ({ ...prev, "submitting": true, "dirty": false }));
    setSendButtonText(buttonText.sending)

    try {
      const response = await sendEmail(CONTACT_ROUTE_URL, message);
      if (response.status === 'success') {
        setFormState(prev => ({ ...prev, "submitting": false, "success": true }));
        setDirectiveText(response.data.message);
        setSendButtonText(buttonText.sendAnother);
        handleReset();
        return
      }

      setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
      console.error(response.error);
      throw new Error("There was an error sending your message!")
    }
    catch (error: unknown) {
      setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
      setDirectiveText("There was a server error!");
      setSendButtonText(buttonText.sendAgain);
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
    ));
    setMessage(prev => (
      {
        ...prev,
        message: '',
      }
    ));
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {customHeader ?? (
        <>
          <h1>Contact</h1>
          <hr />
        </>
      )}

      <p className={formState.error ? styles.error : null}>
        {directiveText}
      </p>

      <div>
        <label htmlFor="name">Name</label>
        <input
          disabled={formState.submitting}
          id="name"
          name="name"
          required
          type="text"
          value={message.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          disabled={formState.submitting}
          id="email"
          name="email"
          required
          type="email"
          value={message.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          disabled={formState.submitting}
          id="message"
          name="message"
          required
          rows={6}
          value={message.message}
          onChange={handleChange}
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

