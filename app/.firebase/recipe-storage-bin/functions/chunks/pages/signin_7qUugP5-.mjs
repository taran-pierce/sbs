import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Vbnbbfmv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as app, $ as $$Layout } from './_id__dGQL9yLn.mjs';
import { getAuth } from 'firebase-admin/auth';
import { N as Navigation } from './dashboard_oy5Jkp28.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const auth = getAuth(app);
  if (Astro2.cookies.has("session")) {
    const sessionCookie = Astro2.cookies.get("session")?.value;
    const decodedCookie = sessionCookie && await auth.verifySessionCookie(sessionCookie);
    if (decodedCookie) {
      return Astro2.redirect("/dashboard");
    }
  }
  return renderTemplate`${renderComponent($$result, "Navigation", Navigation, { "includeLogin": false })} ${maybeRenderHead()}<main> ${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` <h1>Sign in</h1> <p>New here? <a href="/register">Create an account</a></p> <form action="/api/auth/signin" method="post"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> <button id="google">Sign in with Google</button> ` })} </main> `;
}, "/Users/pierce/projects/sbs/app/src/pages/signin.astro", void 0);

const $$file = "/Users/pierce/projects/sbs/app/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };
