import{V as o,a_ as p,a$ as u,b0 as l,b1 as c,b2 as f,b3 as d,b4 as m,b5 as b,b6 as h,b7 as A,aX as g,d as _,u as P,k as v,y,b8 as R,b9 as w,ba as C,aD as E}from"./chunks/framework.BLc8f-zo.js";import{R as T}from"./chunks/theme.Cmd-mtya.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(T),D=_({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return v(()=>{y(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&R(),w(),C(),s.setup&&s.setup(),()=>E(s.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=L(),t=V();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function V(){return b(D)}function L(){let e=o,t;return h(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=g(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{S as createApp};
