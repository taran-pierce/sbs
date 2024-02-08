import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

interface Recipe {
  name: string;
  description: string;
  ingredients: Array<string>;
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const ingredients = formData.get("ingredients")?.toString();
  const email = formData.get("email")?.toString();

  const ingredientsArray = ingredients && ingredients.split(',');

  if (!name || !description || !ingredients || !email) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  // set up firebase
  const db = getFirestore(app);

  try {
    // get recipes db
    const recipesRef = db.collection("recipes");

    // look for existing recipe with matching name
    const recipesSnapshot = await recipesRef.where('name', '==', name).get();
    const recipe = recipesSnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    })) as Recipe[];
    const recipeExists = recipe.length > 0;

    // go back to dashboard if it exists already
    if (recipeExists) {
      return redirect("/dashboard/?recipeExists=true");
    }
  } catch {
    return new Response("Something went wrong adding to main recipe collection...", {
      status: 500,
    });
  }

  // add to main recipe collection
  try {
    // get recipes db
    const recipesRef = db.collection("recipes");

    // look to see if there is already a recipe by that
    const recipesSnapshot = await recipesRef.get();

    // only add recipe if it does not already exist
    await recipesRef.add({
      name,
      description,
      ingredientsArray,
    });
  } catch (error) {
    return new Response("Something went wrong adding to main recipe collection...", {
      status: 500,
    });
  }

  // add to personal recipe collection
  try {
    // get personal recipe db
    const personalRecipesRef = db.collection("personalRecipes");

    // // add to personal recipe colletion
    await personalRecipesRef.add({
      name,
      description,
      ingredientsArray,
      email,
    });
  } catch (error) {
    return new Response("Something went wrong adding to main recipe collection...", {
      status: 500,
    });
  }

  return redirect("/dashboard");
};
