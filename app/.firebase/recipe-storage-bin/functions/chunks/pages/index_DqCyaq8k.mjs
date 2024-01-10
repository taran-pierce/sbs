import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__dGQL9yLn.mjs';
import { N as Navigation } from './dashboard_oy5Jkp28.mjs';

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Navigation", Navigation, { "includeLogin": true })} ${maybeRenderHead()}<main> ${renderComponent($$result, "Layout", $$Layout, { "title": "Recipe Storage Bin" }, { "default": ($$result2) => renderTemplate` <h1>Recipe Storage Bin</h1> <p>Go find yourself some recipes!!</p> <p>Check them out <a href="/recipes/">here</a></p> ` })} </main>`;
}, "/Users/pierce/projects/sbs/app/src/pages/index.astro", void 0);

const $$file$1 = "/Users/pierce/projects/sbs/app/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Add a new friend" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Add a new friend</h1> <form method="post" action="/api/friends"> <label for="name">Name</label> <input type="text" id="name" name="name"> <label for="age">Age</label> <input type="number" id="age" name="age"> <label for="isBestFriend">Is best friend?</label> <input type="checkbox" id="isBestFriend" name="isBestFriend"> <button type="submit">Add friend</button> </form> ` })}`;
}, "/Users/pierce/projects/sbs/app/src/pages/add/index.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/add/index.astro";
const $$url = "/add";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
