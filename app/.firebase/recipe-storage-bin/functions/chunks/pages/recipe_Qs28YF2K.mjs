import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__dGQL9yLn.mjs';

const $$Astro = createAstro();
const $$Recipe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Recipe;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Add a new recipe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Add a new recipe</h1> <form method="post" action="/api/recipes"> <label for="name">Name</label> <input type="text" id="name" name="name"> <label for="description">Description</label> <input type="text" id="description" name="description"> <label for="ingredients">Ingredients</label> <textarea id="ingredients" name="ingredients"></textarea> <button type="submit">Add recipe</button> </form> ` })}`;
}, "/Users/pierce/projects/sbs/app/src/pages/add/recipe.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/add/recipe.astro";
const $$url = "/add/recipe";

export { $$Recipe as default, $$file as file, $$url as url };
