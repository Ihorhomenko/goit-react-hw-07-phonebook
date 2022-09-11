import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import './filter.css'

const Filter = () => {
    const dispatch = useDispatch()

    const handleInputFilter = e => {
        const filterValue = e.currentTarget.value;
        dispatch(addFilter(filterValue))
    }

        return (
            <label className='filter'>
                Find contacts by name
                <input className='filter-input' onChange={handleInputFilter}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
            </label>
        )
    }


export default Filter;