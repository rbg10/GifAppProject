import React ,{useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory =({setCategories})=>{

    const [value, setValue] = useState('');
    
    const handleInputValue =(e)=>{
        setValue(e.target.value);
        
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(value.length>2){
            setCategories(cats=>[value,...cats]);
            setValue("");
        }
        
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input type="text" value={value} onChange={handleInputValue} />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;