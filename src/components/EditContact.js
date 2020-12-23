import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { getContact } from "../actions/contactActions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  //   const history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact.contact);
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

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(getContact(id));
  }, [contact]);

  return (
    <>
      <Card style={{ width: "50rem", margin: "auto" }}>
        <Card.Header style={{ textAlign: "center" }}>Add a contact</Card.Header>
        <Card.Body>
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

            <Button variant="warning" type="submit">
              Update contact
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default EditContact;
