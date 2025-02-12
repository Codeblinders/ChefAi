import React, { useState } from 'react';  
const Form = () => {  
        const [ingredients, setIngredients] = useState([]); // State to hold ingredients  
        const [inputValue, setInputValue] = useState(''); // State to hold input value  
    
        const handleSubmit = (event) => {  
            event.preventDefault();  
            if (inputValue) { // Only add if input is not empty  
                setIngredients([...ingredients, { id: Date.now(), name: inputValue }]); // Add new ingredient  
                setInputValue(''); // Clear input  
            }  
        };  
    
        return (  
            <main>  
                <form onSubmit={handleSubmit}>  
                    <input  
                        type="text"  
                        placeholder="e.g. oregano"  
                        aria-label="Add ingredient"  
                        name="ingredient"  
                        value={inputValue}  
                        onChange={(e) => setInputValue(e.target.value)} // Update state on input change  
                    />  
                    <button type="submit">  
                        + Add Ingredient  
                    </button>  
                </form>  
                <ul>  
                    {ingredients.map((ingredient) => (  
                        <li key={ingredient.id}> {/* Use unique id as key */}  
                            {ingredient.name}  
                        </li>  
                    ))}  
                </ul>  
            </main>  
        );  
    };

export  default Form;