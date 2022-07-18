import { changeFilter } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ title }) {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label>
      <p className={s.text}>{title}</p>
      <input
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))}
        className={s.input}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
