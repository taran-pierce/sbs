import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__dGQL9yLn.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Add a new friend" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Add a new friend</h1> <form method="post" action="/api/friends"> <label for="name">Name</label> <input type="text" id="name" name="name"> <label for="age">Age</label> <input type="number" id="age" name="age"> <label for="isBestFriend">Is best friend?</label> <input type="checkbox" id="isBestFriend" name="isBestFriend"> <button type="submit">Add friend</button> </form> ` })}`;
}, "/Users/pierce/projects/sbs/app/src/pages/add.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/add.astro";
const $$url = "/add";

export { $$Add as default, $$file as file, $$url as url };
