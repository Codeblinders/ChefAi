import { useState } from "react"

export default function Form(){

   

    const ingredients=["chicken","oregano","tomato",]

    const ingredientList= ingredients.map((ingredient)=>(
        <li key={ingredient}>
            {ingredient}
        </li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.currentTarget)
        const newIngredient=formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
        
     }


    

    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient"
                name="ingredient" 
                
                />
                <button>
                   + Add Ingredient
                </button>
            </form>
            <ul>
                
                {ingredientList}
            </ul>
        </main>

    )
}