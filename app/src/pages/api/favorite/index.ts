// TODO just commenting this out for now
// import type { APIRoute } from "astro";
// // import { getAuth } from "firebase-admin/auth";
// import { app } from "../../../firebase/server";
// import { getFirestore } from "firebase-admin/firestore";

// const db = getFirestore(app);
// const recipesRef = db.collection("recipes");
// const customerRef = db.collection("customers");

// export const GET: APIRoute = async ({
//   params,
//   redirect,
//   request,
//   // cookies,
// }) => {
//   console.log('POST');
//   const formData = await request.formData();
//   const id = formData.get("id")?.toString();
//   const email = formData.get("email")?.toString();

//   const { body } = request;
//   const testing = formData.get("body");

//   console.log({
//     id,
//     // email,
//     // params,
//     // request,
//     formData,
//     body,
//     testing,
//     params,
//   });

//   // if (!id) {
//   //   return new Response("Missing required fields", {
//   //     status: 400,
//   //   });
//   // }

//   // if (!params.id) {
//   //   return new Response("Cannot find recipe", {
//   //     status: 404,
//   //   });
//   // }

//   try {
//     // const recipe = await recipesRef.doc(id).get();
//     // const customer = await customerRef.where("email", "==", email).get();

//     // console.log({
//     //   recipe,
//     //   customer,
//     // });


//     // await recipesRef.doc(params.id).update({
//     //   name,
//     //   description,
//     //   ingredients,
//     // });
//   } catch (error) {
//     // return new Response("Something went wrong", {
//     //   status: 500,
//     // });
//   }

//   return redirect("/recipes");
// };

// export const DELETE: APIRoute = async ({ params, redirect }) => {
//   if (!params.id) {
//     return new Response("Cannot find friend", {
//       status: 404,
//     });
//   }

//   try {
//     await recipesRef.doc(params.id).delete();
//   } catch (error) {
//     return new Response("Something went wrong", {
//       status: 500,
//     });
//   }
//   return redirect("/dashboard");
// };
