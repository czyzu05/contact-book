import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
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
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </td>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Contacts;
