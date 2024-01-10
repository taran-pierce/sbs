import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_Vbnbbfmv.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n._navigationWrapper_1v23t_1{border-bottom:1px solid black}._container_1v23t_5{margin:0 auto}@media (min-width: 992px){._container_1v23t_5{width:960px}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n._navigationWrapper_1v23t_1{border-bottom:1px solid black}._container_1v23t_5{margin:0 auto}@media (min-width: 992px){._container_1v23t_5{width:960px}}\n"}],"routeData":{"route":"/dashboard","type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n._navigationWrapper_1v23t_1{border-bottom:1px solid black}._container_1v23t_5{margin:0 auto}@media (min-width: 992px){._container_1v23t_5{width:960px}}\n"}],"routeData":{"route":"/register","type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n._navigationWrapper_1v23t_1{border-bottom:1px solid black}._container_1v23t_5{margin:0 auto}@media (min-width: 992px){._container_1v23t_5{width:960px}}\n._wrapper_1ri97_1{border:1px solid black;display:inline-block;padding:1rem}._container_1s17t_1{border:1px solid red}html,body{margin:0;padding:0}\n"}],"routeData":{"route":"/recipes","type":"page","pattern":"^\\/recipes\\/?$","segments":[[{"content":"recipes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recipes.astro","pathname":"/recipes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signout","type":"page","pattern":"^\\/signout\\/?$","segments":[[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signout.astro","pathname":"/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/friend/[id]","type":"page","pattern":"^\\/friend\\/([^/]+?)\\/?$","segments":[[{"content":"friend","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/friend/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/recipe/[id]","type":"page","pattern":"^\\/recipe\\/([^/]+?)\\/?$","segments":[[{"content":"recipe","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/recipe/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.JQLI66Yf.js"}],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n._navigationWrapper_1v23t_1{border-bottom:1px solid black}._container_1v23t_5{margin:0 auto}@media (min-width: 992px){._container_1v23t_5{width:960px}}\n"}],"routeData":{"route":"/signin","type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n._navigationWrapper_1v23t_1{border-bottom:1px solid black}._container_1v23t_5{margin:0 auto}@media (min-width: 992px){._container_1v23t_5{width:960px}}\nhtml,body{margin:0;padding:0}\n"}],"routeData":{"route":"/login","type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"delete-document\"),n=document.querySelector(\"form\")?.getAttribute(\"action\");t.addEventListener(\"click\",async()=>{const e=await fetch(n,{method:\"DELETE\"});e.redirected&&window.location.assign(e.url)});\n"}],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/edit/recipe/[id]","type":"page","pattern":"^\\/edit\\/recipe\\/([^/]+?)\\/?$","segments":[[{"content":"edit","dynamic":false,"spread":false}],[{"content":"recipe","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/edit/recipe/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"delete-document\"),n=document.querySelector(\"form\")?.getAttribute(\"action\");t.addEventListener(\"click\",async()=>{const e=await fetch(n,{method:\"DELETE\"});e.redirected&&window.location.assign(e.url)});\n"}],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/edit/[id]","type":"page","pattern":"^\\/edit\\/([^/]+?)\\/?$","segments":[[{"content":"edit","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/edit/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/add","type":"page","pattern":"^\\/add\\/?$","segments":[[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/add/index.astro","pathname":"/add","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/add/recipe","type":"page","pattern":"^\\/add\\/recipe\\/?$","segments":[[{"content":"add","dynamic":false,"spread":false}],[{"content":"recipe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/add/recipe.astro","pathname":"/add/recipe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"._container_jp2ao_1{margin:0 auto}@media (min-width: 992px){._container_jp2ao_1{width:960px}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}html,body{margin:0;padding:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/add","type":"page","pattern":"^\\/add\\/?$","segments":[[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/add.astro","pathname":"/add","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/friends","type":"endpoint","pattern":"^\\/api\\/friends\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"friends","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/friends/index.ts","pathname":"/api/friends","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/friends/[id]","type":"endpoint","pattern":"^\\/api\\/friends\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"friends","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/friends/[id].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/recipes","type":"endpoint","pattern":"^\\/api\\/recipes\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"recipes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/recipes/index.ts","pathname":"/api/recipes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/recipes/[id]","type":"endpoint","pattern":"^\\/api\\/recipes\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"recipes","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/recipes/[id].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/pierce/projects/sbs/app/src/pages/add.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/add/index.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/add/recipe.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/edit/[id].astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/edit/recipe/[id].astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/friend/[id].astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/recipe/[id].astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/recipes.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/register.astro",{"propagation":"none","containsHead":true}],["/Users/pierce/projects/sbs/app/src/pages/signin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/add.astro":"chunks/pages/add__lfaPXPa.mjs","/src/pages/login.astro":"chunks/pages/login_TEoOUhe1.mjs","/node_modules/astro/dist/assets/endpoint/node.js":"chunks/pages/node_ycyOEsav.mjs","/src/pages/add/recipe.astro":"chunks/pages/recipe_Qs28YF2K.mjs","/src/pages/recipes.astro":"chunks/pages/recipes_7mzoFBmt.mjs","/src/pages/register.astro":"chunks/pages/register_yoVO8xcD.mjs","/src/pages/api/auth/register.ts":"chunks/pages/register_q8864kvD.mjs","/src/pages/signin.astro":"chunks/pages/signin_7qUugP5-.mjs","/src/pages/api/auth/signin.ts":"chunks/pages/signin_tGAYyH_x.mjs","/src/pages/signout.astro":"chunks/pages/signout_CVkkjPjt.mjs","/src/pages/api/auth/signout.ts":"chunks/pages/signout_tvnDkyvM.mjs","\u0000@astrojs-manifest":"manifest_EFeIJhbD.mjs","/Users/pierce/projects/sbs/app/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"chunks/node_EVjIrozl.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_8dJyS2aK.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"chunks/dashboard_B5QwGpgo.mjs","\u0000@astro-page:src/pages/register@_@astro":"chunks/register_tlydeX-F.mjs","\u0000@astro-page:src/pages/recipes@_@astro":"chunks/recipes_Au4j7Le6.mjs","\u0000@astro-page:src/pages/signout@_@astro":"chunks/signout_JbLmFtYL.mjs","\u0000@astro-page:src/pages/friend/[id]@_@astro":"chunks/_id__i5gW7-9x.mjs","\u0000@astro-page:src/pages/recipe/[id]@_@astro":"chunks/_id__0D6WzrDG.mjs","\u0000@astro-page:src/pages/signin@_@astro":"chunks/signin_eF6ROnSR.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_WBYMoqV-.mjs","\u0000@astro-page:src/pages/edit/recipe/[id]@_@astro":"chunks/_id__2Q4VpT6R.mjs","\u0000@astro-page:src/pages/edit/[id]@_@astro":"chunks/_id__b0cHgkia.mjs","\u0000@astro-page:src/pages/add/index@_@astro":"chunks/index_2Y3IIeLo.mjs","\u0000@astro-page:src/pages/add/recipe@_@astro":"chunks/recipe_UE_fB726.mjs","\u0000@astro-page:src/pages/add@_@astro":"chunks/add_vjz-gRrN.mjs","\u0000@astro-page:src/pages/api/friends/index@_@ts":"chunks/index_kQ4Ny934.mjs","\u0000@astro-page:src/pages/api/friends/[id]@_@ts":"chunks/_id__Rm5UChLH.mjs","\u0000@astro-page:src/pages/api/recipes/index@_@ts":"chunks/index_F8WIvFtQ.mjs","\u0000@astro-page:src/pages/api/recipes/[id]@_@ts":"chunks/_id__-t7jdcvJ.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"chunks/register_oVpeNdZW.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"chunks/signout_Hk0Yg97z.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"chunks/signin_4l2ncUgr.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.NwVeL4UR.js","/astro/hoisted.js?q=1":"_astro/hoisted.JJn5kpig.js","/astro/hoisted.js?q=0":"_astro/hoisted.JQLI66Yf.js","@astrojs/react/client.js":"_astro/client.gSoe9Upx.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/client.gSoe9Upx.js","/_astro/hoisted.JQLI66Yf.js"]});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
