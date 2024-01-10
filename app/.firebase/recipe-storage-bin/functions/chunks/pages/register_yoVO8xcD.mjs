import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__dGQL9yLn.mjs';
import { N as Navigation } from './dashboard_oy5Jkp28.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Navigation", Navigation, { "includeLogin": false })} ${maybeRenderHead()}<main> ${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` <h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p> <form action="/api/auth/register" method="post"> <label for="name">Name</label> <input type="text" name="name" id="name"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })} </main>`;
}, "/Users/pierce/projects/sbs/app/src/pages/register.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
