import { a as app } from './_id__dGQL9yLn.mjs';
import { getFirestore } from 'firebase-admin/firestore';

const db$1 = getFirestore(app);
const friendsRef = db$1.collection("friends");
const POST$1 = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const age = formData.get("age")?.toString();
  const isBestFriend = formData.get("isBestFriend") === "on";
  if (!name || !age) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  if (!params.id) {
    return new Response("Cannot find friend", {
      status: 404
    });
  }
  try {
    await friendsRef.doc(params.id).update({
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
const DELETE$1 = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find friend", {
      status: 404
    });
  }
  try {
    await friendsRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/dashboard");
};

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE: DELETE$1,
  POST: POST$1
}, Symbol.toStringTag, { value: 'Module' }));

const db = getFirestore(app);
const recipesRef = db.collection("recipes");
const POST = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const ingredients = formData.get("ingredients")?.toString();
  if (!name || !description || !ingredients) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  if (!params.id) {
    return new Response("Cannot find recipe", {
      status: 404
    });
  }
  try {
    await recipesRef.doc(params.id).update({
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
const DELETE = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find friend", {
      status: 404
    });
  }
  try {
    await recipesRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/dashboard");
};

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_$1 as _, _id_ as a };
