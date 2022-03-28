import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue) {
            setCategories((prevCategories) => [inputValue, ...prevCategories]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input
                className="input-category"
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange = {handleInputChange}
            />
        </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

