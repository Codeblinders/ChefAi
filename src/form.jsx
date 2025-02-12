import React, { useState } from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/ingredientsList";
import { getRecipeFromMistral } from "./components/ai.js";

export default function Form() {
    const [ingredients, setIngredients] = useState(["all important spices"]);
    const [recipe, setRecipe] = useState("");

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);
        const newIngredient = formData.get("ingredient")?.trim();

        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients((prev) => [...prev, newIngredient]);
        }
        formEl.reset();
    }

    function handleSubmit1(event) {
        event.preventDefault();
        setIngredients((prev) => prev.filter((ingredient) => ingredient === "all important spices"));
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">+ Add Ingredient</button>
            </form>
            <br />
            <form onSubmit={handleSubmit1}>
                <button type="submit">+ Add ingredient for new Recipe</button>
            </form>
            {ingredients.length > 0 && (
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            )}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
