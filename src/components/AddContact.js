import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameInput = e => {
    setName(e.target.value);
  };
  const handlePhoneInput = e => {
    setPhone(e.target.value);
  };
  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="header">Add a contact </div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameInput}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneInput}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddContact;
