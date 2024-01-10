import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__dGQL9yLn.mjs';
import { N as Navigation } from './dashboard_oy5Jkp28.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Navigation", Navigation, { "includeLogin": false, "data-astro-cid-sgpqyurt": true })} ${maybeRenderHead()}<main data-astro-cid-sgpqyurt> ${renderComponent($$result, "Layout", $$Layout, { "title": "Recipe Storage Bin", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` <h1 data-astro-cid-sgpqyurt>Login</h1> <p data-astro-cid-sgpqyurt>Login form will be here</p> ` })} </main> `;
}, "/Users/pierce/projects/sbs/app/src/pages/login.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
