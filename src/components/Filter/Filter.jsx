import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from 'redux/contacts/contactsSelector';
import { FILTER } from 'redux/contacts/filterSlice';



const Filter = () => {

  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);

  const handleFilter = ev => {
    const { value } = ev.target;
    dispatch(FILTER(value.trim()));
  };

  return (
    <label name="filter" className=''>
      <span className=''>You can find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filtered}
        onChange={handleFilter}
        className=''
      />
    </label>
  );
};

export default Filter;
