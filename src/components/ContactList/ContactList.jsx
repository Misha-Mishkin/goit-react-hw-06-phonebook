import { deleteContact } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              onClick={id => dispatch(deleteContact(id))}
              className={s.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
