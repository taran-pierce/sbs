import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({
  request,
  redirect,
}) => {
  const auth = getAuth(app);

  /* Get form data */
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error: any) {
    return new Response(
      "Something went wrong",
      { status: 400 }
    );
  }

  try {
    // get the store
    const db = getFirestore(app);

    // look for customers table
    const customersRef = db.collection("customers");
    await customersRef.add({
      name,
      email,
      personalRecipes: [],
    });
  } catch (error: any) {
    return new Response(
      "Problem creating customer account",
      { status: 500 }
    );
  }
  
  return redirect("/signin?newUser=true");
};
