import css from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Contact = ({
  person: { name, number },
}) => {
  return (
    <>
      <div>
        <div className={css.info}>
          <div className={css.infoText}>
            <IoMdContact />
            <p>{name}</p>
          </div>
          <div className={css.infoText}>
            <FaPhone />
            <p>{number}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;