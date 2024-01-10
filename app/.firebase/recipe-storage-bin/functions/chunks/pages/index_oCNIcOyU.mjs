import { a as app } from './_id__dGQL9yLn.mjs';
import { getFirestore } from 'firebase-admin/firestore';

const POST$1 = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const age = formData.get("age")?.toString();
  const isBestFriend = formData.get("isBestFriend") === "on";
  if (!name || !age) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const friendsRef = db.collection("friends");
    await friendsRef.add({
      name,
      age: parseInt(age),
      isBestFriend
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/dashboard");
};

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST: POST$1
}, Symbol.toStringTag, { value: 'Module' }));

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const ingredients = formData.get("ingredients")?.toString();
  if (!name || !description || !ingredients) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const recipesRef = db.collection("recipes");
    await recipesRef.add({
      name,
      description,
      ingredients
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/dashboard");
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
