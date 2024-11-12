import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

function Contact({ contact, deleteContact }) {
  function handleClick() {
    deleteContact(contact.id);
  }

  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaPhone />
          {contact.name}
        </p>
        <p>
          <IoPerson />
          {contact.number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Contact;