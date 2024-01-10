import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__dGQL9yLn.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { S as Styles, a as Styles$1 } from '../recipes.6c26838c_KlTux-AR.mjs';
import { N as Navigation } from './dashboard_oy5Jkp28.mjs';
import contentful from 'contentful';

function RecipeCard({
  title,
  description,
  ingredients
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: Styles.wrapper, children: [
    /* @__PURE__ */ jsx("h4", { children: title }),
    /* @__PURE__ */ jsx("p", { children: description }),
    /* @__PURE__ */ jsx("ul", { children: ingredients.map((ingredient) => /* @__PURE__ */ jsx("li", { children: ingredient }, ingredient)) })
  ] }) });
}

function RecipeList({
  recipes
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { children: "Here are some recipes." }),
    /* @__PURE__ */ jsx("div", { className: Styles$1.container, children: recipes.map((recipe) => {
      const fields = recipe.fields;
      const {
        name,
        description,
        ingredients
      } = fields;
      return /* @__PURE__ */ jsx(
        RecipeCard,
        {
          title: name,
          description,
          ingredients
        },
        name
      );
    }) })
  ] }) });
}

const contentfulClient = contentful.createClient({
  space: "lwmlghglairb",
  accessToken: "LFthyPTGACw45a5nSPtiG7oyB8ozv20RPFnGD6UTs2Y",
  host: "cdn.contentful.com"
});

const $$Astro = createAstro();
const $$Recipes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Recipes;
  const entries = await contentfulClient.getEntries({
    content_type: "page"
  });
  const recipes = await contentfulClient.getEntries({
    content_type: "recipe"
  });
  return renderTemplate`${renderComponent($$result, "Navigation", Navigation, { "includeLogin": true, "data-astro-cid-fki6ocqz": true })} ${maybeRenderHead()}<main data-astro-cid-fki6ocqz> ${renderComponent($$result, "Layout", $$Layout, { "title": "Recipe Storage Bin - Recipes", "data-astro-cid-fki6ocqz": true }, { "default": ($$result2) => renderTemplate` <h1 data-astro-cid-fki6ocqz>Recipes</h1> ${renderComponent($$result2, "RecipeList", RecipeList, { "recipes": recipes.items, "data-astro-cid-fki6ocqz": true })} ${entries.items.map((item) => renderTemplate`<section data-astro-cid-fki6ocqz> <h2 data-astro-cid-fki6ocqz>${item.fields.pageTitle}</h2> </section>`)}` })} </main> `;
}, "/Users/pierce/projects/sbs/app/src/pages/recipes.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/recipes.astro";
const $$url = "/recipes";

export { $$Recipes as default, $$file as file, $$url as url };
