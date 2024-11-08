import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  
  const [users, setUsers] = useState(() => {
    const localUsers =
      localStorage.getItem("userList");
    return localUsers
      ? JSON.parse(localUsers)
      : [
          {
            id: "id-1",
            name: "Rosie Simpson",
            number: "459-12-56",
          },
          {
            id: "id-2",
            name: "Hermione Kline",
            number: "443-89-12",
          },
          {
            id: "id-3",
            name: "Eden Clements",
            number: "645-17-79",
          },
          {
            id: "id-4",
            name: "Annie Copeland",
            number: "227-91-26",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "userList",
      JSON.stringify(users)
    );
  }, [users]);
 
  const [filterValue, setFilterValue] =
    useState("");

  const onAddProfile = (profile) => {
    const finalProfile = {
      ...profile,
      id: nanoid(),
    };

    setUsers([finalProfile, ...users]);
  };

  const visibleUser = users.filter((profile) =>
    profile.name
      .toLowerCase()
      .includes(filterValue.toLowerCase())
  );

  const onDeleteProfile = (profileId) => {
    setUsers(
      users.filter(
        (item) => item.id !== profileId
      )
    );
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddProfile={onAddProfile}
        />
        <SearchBox
          filterValue={filterValue}
          handleFilter={setFilterValue}
        />
        <ContactList
          users={visibleUser}
          onDeleteProfile={onDeleteProfile}
        />
      </div>
    </>
  );
}

export default App;