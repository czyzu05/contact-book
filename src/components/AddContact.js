import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { Form, Button, Card } from "react-bootstrap";
import { addContact } from "../actions/contactActions";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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

  const createContact = e => {
    e.preventDefault();
    dispatch(
      addContact({
        id: shortid.generate(),
        name,
        phone,
        email,
      })
    );
    history.push("/contact-book");
  };

  return (
    <>
      <Card style={{ width: "50rem", margin: "auto" }}>
        <Card.Header style={{ textAlign: "center" }}>Add a contact</Card.Header>
        <Card.Body>
          <Form onSubmit={createContact}>
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
        </Card.Body>
      </Card>
    </>
  );
};

export default AddContact;
