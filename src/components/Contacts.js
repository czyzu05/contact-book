import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllContacts,
  clearContacts,
  deleteSelectedContacts,
} from "../actions/contactActions";
import Contact from "./Contact";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector(state => state.contact.contacts);
  const selectedContacts = useSelector(state => state.contact.selectedContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContacts(contacts.map(contact => contact.id)));
    } else {
      dispatch(clearContacts());
    }
  }, [selectAll]);
  return (
    <>
      {selectedContacts.length > 0 && contacts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteSelectedContacts())}
        >
          Delete All
        </button>
      ) : null}
      {contacts.length > 0 ? (
        <Table bordered hover variant="shadow">
          <thead className="bg-danger text-white">
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                  <input
                    id="sellectAll"
                    type="checkbox"
                    className="custom-control-input"
                    value={selectAll}
                    onClick={() => setSelectAll(!selectAll)}
                  />
                  <label
                    htmlFor="sellectAll"
                    className="custom-control-label"
                  ></label>
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
              <Contact {...contact} key={contact.id} selectAll={selectAll} />
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Your contact book is empty. Please create your first contact.</p>
      )}
    </>
  );
};

export default Contacts;
