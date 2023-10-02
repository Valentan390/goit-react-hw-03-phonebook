import styles from './Contacts.module.css';

const ContactsListItem = ({ name, number, onDelete }) => {
  return (
    <li className={styles.listItemContacts}>
      <p>{name} -</p>
      <span>tel: {number}</span>
      <button className={styles.buttonDeleteContacts} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={styles.listContacts}>
        {contacts.map(contact => {
          return (
            <ContactsListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={() => onDeleteContact(contact.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
