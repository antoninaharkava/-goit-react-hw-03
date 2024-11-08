import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({
  users,
  onDeleteProfile,
}) => {
  return (
    <div>
      <ul className={css.list}>
        {users.map((user) => {
          return (
            <li
              className={css.listItem}
              key={user.id}
            >
              <Contact person={user} />
              <button
                className={css.btn}
                type="button"
                onClick={() =>
                  onDeleteProfile(user.id)
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
