import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import purpleClouds from "../images/purpleClouds.png";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [sent, setSent] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email", email);
    console.log("name", name);
    console.log("message", message);
    let data = {
      name: name,
      email: email,
      message: message
    };

    axios
      .post("/api/form", data)
      .then(res => {
        setSent(true);
        resetForm();
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSent(null);
    }, 3000);
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updateName = e => {
    setName(e.target.value);
  };

  const updateMessage = e => {
    setMessage(e.target.value);
  };

  return (
    <div className="contactPage">
      <div className="formBox">
        <Form onSubmit={handleSubmit}>
          {sent ? (
            <Alert color="success">Email successfully sent!</Alert>
          ) : null}
          {sent == false ? <Alert color="danger">Email not sent!</Alert> : null}
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={updateName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={email}
              onChange={updateEmail}
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              value={message}
              onChange={updateMessage}
            />
          </FormGroup>
          <Button
            style={{ background: "#0d0d0d", color: "grey", border: "none" }}
          >
            Submit
          </Button>
        </Form>
      </div>
      <div className="contactBGbox">
        <div className="contactTitleBox">Contact</div>
        <img className="contactBG" src={purpleClouds}></img>
      </div>
    </div>
  );
}
