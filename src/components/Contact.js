import React from "react";
import Avatar from "react-avatar";

const Contact = ({ name, phone, email }) => {
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
        <a href="#">
          <span className="mr-2">
            <i className="fas fa-pen"></i>
          </span>
        </a>
        <a href="#">
          <span>
            <i className="fas fa-trash-alt text-danger"></i>
          </span>
        </a>
      </td>
    </tr>
  );
};

export default Contact;
