// import { HfInference } from "Ai_name";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Directly provide the API token here
const HF_ACCESS_TOKEN = "your token "; 

// Initialize the Hugging Face Inference with the token
const hf = new HfInference(HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
    if (!ingredientsArr || ingredientsArr.length === 0) {
        return "Please provide at least one ingredient.";
    }

    const ingredientsString = ingredientsArr.join(", ");
    try {
        // Query the Hugging Face API
        const response = await hf.conversational({
            model: "api_name",
            inputs: {
                past_user_inputs: [],
                generated_responses: [],
                text: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
            },
            provider: "together",
	        max_tokens: 500,
        });

        if (!response || !response.generated_text) {
            return "Sorry, I couldn't generate a recipe at this time. Please try again.";
        }

        return response.generated_text;
    } catch (err) {
        console.error("Error fetching recipe:", err);
        return "An error occurred while generating the recipe. Please try again.";
    }
}
