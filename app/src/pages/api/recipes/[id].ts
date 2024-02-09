import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);
const recipesRef = db.collection("recipes");

export async function getStaticPaths() {
  const db = getFirestore(app);
  const recipesRef = db.collection("recipes");

  const allRecipesSnapshot = await recipesRef.get();

  const pageData = allRecipesSnapshot.docs.map((doc) => {
    const { id } = doc;

    return {
      params: {
        id: id,
      }
    };
  });
  
  return pageData;
}

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const ingredients = formData.get("ingredients")?.toString();

  if (!name || !description || !ingredients) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  if (!params.id) {
    return new Response("Cannot find recipe", {
      status: 404,
    });
  }

  try {
    await recipesRef.doc(params.id).update({
      name,
      description,
      ingredients,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/dashboard");
};

export const DELETE: APIRoute = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find friend", {
      status: 404,
    });
  }

  try {
    await recipesRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/dashboard");
};
