import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector(state => state.contact.contacts);
  return (
    <Table bordered hover variant="shadow">
      <thead className="bg-danger text-white">
        <tr>
          <th>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label"></label>
            </div>
          </th>
          <th>Name</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <Contact {...contact} key={contact.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default Contacts;
