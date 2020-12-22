import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Contact = ({ name, phone, email, id }) => {
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="mr-2">
            <i className="fas fa-pen"></i>
          </span>
        </Link>
        <Link to="#">
          <span>
            <i className="fas fa-trash-alt text-danger"></i>
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Contact;
