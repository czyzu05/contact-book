import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../actions/contactActions";
import { useDispatch } from "react-redux";

const Contact = ({ name, phone, email, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
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
        <span onClick={handleDeleteContact}>
          <i
            className="fas fa-trash-alt text-danger"
            style={{ fontSize: "20px", cursor: "pointer" }}
          ></i>
        </span>
      </td>
    </tr>
  );
};

export default Contact;
