import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as app, $ as $$Layout } from './_id__dGQL9yLn.mjs';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { S as Styles } from '../dashboard.33d99a51_qIEKOjhM.mjs';

const navigationLinks = [
  {
    path: "/",
    text: "home"
  },
  {
    path: "/recipes/",
    text: "Recipes"
  }
];
function Navigation({
  includeLogin
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: Styles.navigationWrapper, children: /* @__PURE__ */ jsxs("div", { className: Styles.container, children: [
    /* @__PURE__ */ jsx("span", { children: "SharingItUp" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      navigationLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.path, children: link.text }) }, link.text)),
      includeLogin && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/signin/", children: "Login" }) })
    ] })
  ] }) }) });
}

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const db = getFirestore(app);
  const friendsRef = db.collection("friends");
  const friendsSnapshot = await friendsRef.get();
  const friends = friendsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  const recipesRef = db.collection("recipes");
  const recipesSnapshot = await recipesRef.get();
  const recipes = recipesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  const auth = getAuth(app);
  if (!Astro2.cookies.has("session")) {
    return Astro2.redirect("/signin");
  }
  const sessionCookie = Astro2.cookies.get("session")?.value;
  const decodedCookie = sessionCookie && await auth.verifySessionCookie(sessionCookie);
  const user = decodedCookie && await auth.getUser(decodedCookie.uid);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Navigation", Navigation, { "includeLogin": false })} ${maybeRenderHead()}<main> ${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` <h1>Welcome ${user.displayName}</h1> <p>We are happy to see you here</p> <form action="/api/auth/signout"> <button type="submit">Sign out</button> </form> <h2>Friends</h2> <ul> ${friends.map((friend) => renderTemplate`<li> <a${addAttribute(`/friend/${friend.id}`, "href")}>${friend.name}</a> <span>(${friend.age})</span> <strong>${friend.isBestFriend ? "Bestie" : "Friend"}</strong> <a${addAttribute(`/edit/${friend.id}`, "href")}>Edit</a> </li>`)} <li> <p> <a href="/add/">Add Friend</a> </p> </li> </ul> <h2>Recipes</h2> <ul> ${recipes.map((recipe) => renderTemplate`<li> <a${addAttribute(`/recipe/${recipe.id}`, "href")}>${recipe.name}</a> <span>(${recipe.description})</span> <strong>${recipe.ingredients}</strong> <a${addAttribute(`/edit/recipe/${recipe.id}`, "href")}>Edit</a> </li>`)} <li> <p> <a href="/add/recipe/">Add Recipe</a> </p> </li> </ul> ` })} </main>`;
}, "/Users/pierce/projects/sbs/app/src/pages/dashboard.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Navigation as N, dashboard as d };
