import { deleteContact } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const renderContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {renderContactList.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button onClick={() => handleDelete(id)} className={s.button}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
