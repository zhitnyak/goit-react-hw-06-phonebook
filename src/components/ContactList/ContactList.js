import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-actions";
import { filter } from "../../redux/filter/filter-actions";
import css from "./ContactList.module.css";
import { useEffect, useCallback } from "react";

function ContactList() {
  const contacts = useSelector((state) => state.items);
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeContact(id));
  }
  const getVisibleContacts = useCallback(() => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterValue]);

  useEffect(() => {
    if (getVisibleContacts().length === 0 && filterValue !== "") {
      dispatch(filter(""));
    }
  }, [getVisibleContacts, dispatch]);

  const visibleContacts = getVisibleContacts();
  return (
    <ul className={css.list}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {`${name}: ${number}`}
            <button
              className={css.btn}
              type="button"
              onClick={() => handleRemove(id)}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
