import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { getFirestore } from 'firebase-admin/firestore';
import { S as Styles } from '../add.9534e801_q28Slq9n.mjs';
import { getApps, initializeApp, applicationDefault } from 'firebase-admin/app';

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Recipe Storage Bin"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div${addAttribute(Styles.container, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/pierce/projects/sbs/app/src/layouts/Layout.astro", void 0);

const activeApps = getApps();
const app = activeApps.length === 0 ? initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://recipe-storage-bin-default-rtdb.firebaseio.com"
}) : activeApps[0];

const $$Astro$3 = createAstro();
const $$id$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$id$3;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const friendsRef = db.collection("friends");
  const friendSnapshot = await friendsRef.doc(id).get();
  if (!friendSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const friend = friendSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": friend.name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${friend.name}</h1> <p>Age: ${friend.age}</p> <p>Is best friend: ${friend.isBestFriend ? "Yes" : "No"}</p> ` })}`;
}, "/Users/pierce/projects/sbs/app/src/pages/friend/[id].astro", void 0);

const $$file$3 = "/Users/pierce/projects/sbs/app/src/pages/friend/[id].astro";
const $$url$3 = "/friend/[id]";

const _id_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$id$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$id$2;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const recipesRef = db.collection("recipes");
  const recipesSnapshot = await recipesRef.doc(id).get();
  if (!recipesSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const recipe = recipesSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": recipe.name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${recipe.name}</h1> <p>Description: ${recipe.description}</p> <p>Ingredients: ${recipe.ingredients}</p> ` })}`;
}, "/Users/pierce/projects/sbs/app/src/pages/recipe/[id].astro", void 0);

const $$file$2 = "/Users/pierce/projects/sbs/app/src/pages/recipe/[id].astro";
const $$url$2 = "/recipe/[id]";

const _id_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const recipesRef = db.collection("recipes");
  const recipesSnapshot = await recipesRef.doc(id).get();
  if (!recipesSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const recipe = recipesSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Edit {recipe.name}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Edit ${recipe.name}</h1> <p>Here you can edit or delete your friend's data.</p> <form method="post"${addAttribute(`/api/recipes/${id}`, "action")}> <label for="name">Name</label> <input type="text" id="name" name="name"${addAttribute(recipe.name, "value")}> <label for="description">Description</label> <input type="text" id="description" name="description"${addAttribute(recipe.description, "value")}> <label for="ingredients">Ingredients</label> <input type="text" id="ingredients" name="ingredients"${addAttribute(recipe.ingredients, "value")}> <button type="submit">Edit recipe</button> </form> <button type="button" id="delete-document">Delete</button> ` })} `;
}, "/Users/pierce/projects/sbs/app/src/pages/edit/recipe/[id].astro", void 0);

const $$file$1 = "/Users/pierce/projects/sbs/app/src/pages/edit/recipe/[id].astro";
const $$url$1 = "/edit/recipe/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const friendsRef = db.collection("friends");
  const friendSnapshot = await friendsRef.doc(id).get();
  if (!friendSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const friend = friendSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Edit {friend.name}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Edit ${friend.name}</h1> <p>Here you can edit or delete your friend's data.</p> <form method="post"${addAttribute(`/api/friends/${id}`, "action")}> <label for="name">Name</label> <input type="text" id="name" name="name"${addAttribute(friend.name, "value")}> <label for="age">Age</label> <input type="number" id="age" name="age"${addAttribute(friend.age, "value")}> <label for="isBestFriend">Is best friend?</label> <input type="checkbox" id="isBestFriend" name="isBestFriend"${addAttribute(friend.isBestFriend, "checked")}> <button type="submit">Edit friend</button> </form> <button type="button" id="delete-document">Delete</button> ` })} `;
}, "/Users/pierce/projects/sbs/app/src/pages/edit/[id].astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/edit/[id].astro";
const $$url = "/edit/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_$3 as _, app as a, _id_$2 as b, _id_$1 as c, _id_ as d };
