(this.webpackJsonpoptimization=this.webpackJsonpoptimization||[]).push([[0],{52:function(e,n,t){"use strict";t.r(n);var o,r,a,s,i,c,l,d,p,m,h,u,j,b,x,g,f,O,y,v=t(1),w=t.n(v),z=t(25),k=t.n(z),C=t(10),E=t(35),q=t(3),S=t(5),P="#000000",A="#ffffff",F={black:P,white:A,primary:"#F74464",text:"#283238",background:A,lightBackground:"#F3F3F3",darkBackground:"#333333",disabledBackground:"#CDD4DB",modalBackground:P,danger:"#FF8888",link:"#3366BB",success:"#28AC42",highlight:"#E4E4E4"},I={high:.87,medium:.6,low:.38,pure:1},R={xl:"".concat(64,"px"),l:"".concat(48,"px"),m:"".concat(24,"px"),s:"".concat(16,"px"),xs:"".concat(8,"px")},B={xxl:"28px",xl:"24px",l:"18px",m:"16px",s:"14px",xs:"12px",xxs:"10px"},D={light:"300",regular:"400",medium:"500",bold:"700",black:"800"},L=t(0),T=function(e){var n=e.children;return Object(L.jsx)(S.ThemeProvider,{theme:{colors:F,spacers:R,emphasis:I,text:{fontSize:B,fontWeight:D}},children:n})},M=t(2),_=S,N=_.default,V=(_.ThemeProvider,_.createGlobalStyle),U=(_.css,_.ThemeContext,N),W=V(o||(o=Object(M.a)(['\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/* Sections\n ========================================================================== */\n/**\n* Remove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n  font-family: \'Roboto\';\n}\n\n#root {\n  display: grid;\n  grid-template-columns: minmax(120px, 220px) auto auto;\n  grid-template-rows: 90px auto auto;\n  height: 100vh;\n}\n/**\n* Render the main element consistently in IE.\n*/\nmain {\n  display: block;\n}\n/**\n* Correct the font size and margin on h1 elements within section and\n* article contexts in Chrome, Firefox, and Safari.\n*/\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n ========================================================================== */\n/**\n* 1. Add the correct box sizing in Firefox.\n* 2. Show the overflow in Edge and IE.\n*/\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/**\n* 1. Correct the inheritance and scaling of font size in all browsers.\n* 2. Correct the odd em font sizing in all browsers.\n*/\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/* Text-level semantics\n ========================================================================== */\n/**\n* Remove the gray background on active links in IE 10.\n*/\na {\n  background-color: transparent;\n}\n/**\n* 1. Remove the bottom border in Chrome 57-\n* 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n*/\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n* Add the correct font weight in Chrome, Edge, and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n* 1. Correct the inheritance and scaling of font size in all browsers.\n* 2. Correct the odd em font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n* Add the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/**\n* Prevent sub and sup elements from affecting the line height in\n* all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n ========================================================================== */\n/**\n* Remove the border on images inside links in IE 10.\n*/\nimg {\n  border-style: none;\n}\n/* Forms\n ========================================================================== */\n/**\n* 1. Change the font styles in all browsers.\n* 2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n* Show the overflow in IE.\n* 1. Show the overflow in Edge.\n*/\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n* Remove the inheritance of text transform in Edge, Firefox, and IE.\n* 1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n* Correct the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n/**\n* Remove the inner border and padding in Firefox.\n*/\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n* Restore the focus styles unset by the previous rule.\n*/\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n* Correct the padding in Firefox.\n*/\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n* 1. Correct the text wrapping in Edge and IE.\n* 2. Correct the color inheritance from fieldset elements in IE.\n* 3. Remove the padding so developers are not caught out when they zero out\n*    fieldset elements in all browsers.\n*/\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n* Add the correct vertical alignment in Chrome, Firefox, and Opera.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/**\n* Remove the default vertical scrollbar in IE 10+.\n*/\ntextarea {\n  overflow: auto;\n}\n/**\n* 1. Add the correct box sizing in IE 10.\n* 2. Remove the padding in IE 10.\n*/\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n* Correct the cursor style of increment and decrement buttons in Chrome.\n*/\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n* 1. Correct the odd appearance in Chrome and Safari.\n* 2. Correct the outline style in Safari.\n*/\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n* Remove the inner padding in Chrome and Safari on macOS.\n*/\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n* 1. Correct the inability to style clickable types in iOS and Safari.\n* 2. Change font properties to inherit in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n/* Interactive\n ========================================================================== */\n/*\n* Add the correct display in Edge, IE 10+, and Firefox.\n*/\ndetails {\n  display: block;\n}\n/*\n* Add the correct display in all browsers.\n*/\nsummary {\n  display: list-item;\n}\n/* Misc\n ========================================================================== */\n/**\n* Add the correct display in IE 10+.\n*/\ntemplate {\n  display: none;\n}\n/**\n* Add the correct display in IE 10.\n*/\n[hidden] {\n  display: none;\n}']))),G=U.div(r||(r=Object(M.a)(["\n  background-color: ",";\n  padding: ",";\n  grid-column: 1 / span 3;\n"])),(function(e){return e.theme.colors.darkBackground}),(function(e){return e.theme.spacers.m})),J=U.h1(a||(a=Object(M.a)(["\n  color: ",";\n  opacity: ",";\n  margin: 0px;\n  font-weight: 500;\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.emphasis.high})),Y=function(){return Object(L.jsx)(G,{children:Object(L.jsx)(J,{children:"React development optimization"})})},H=U.div(s||(s=Object(M.a)(["\n  background-color: ",";\n  overflow-y: scroll;\n  height: calc(100vh - 90px);\n"])),(function(e){return e.theme.colors.lightBackground})),X=U.div(i||(i=Object(M.a)(["\n  padding: ",";\n"])),(function(e){return e.theme.spacers.m})),K=U(C.b)(c||(c=Object(M.a)(["\n  display: block;\n  padding: "," 0px;\n  text-decoration: none;\n  color: ",";\n  font-weight: 100;\n"])),(function(e){return e.theme.spacers.xs}),(function(e){return e.theme.colors.text})),Q=U(K)(l||(l=Object(M.a)(["\n  color: ",";\n  font-weight: 300;\n"])),(function(e){return e.theme.colors.primary})),Z=[{path:"/optimization",name:"Optimization"},{path:"/architecture",name:"Architecture"},{path:"/folder",name:"Folder"},{path:"/typescript",name:"Typescript"},{path:"/hooks",name:"Hooks"},{path:"/styled-components",name:"Styled components"},{path:"/design-system",name:"Design system"},{path:"/documentation",name:"Documentation"},{path:"/react-router-dom",name:"React router dom"},{path:"/react-navigation",name:"React navigation"},{path:"/global-state",name:"Global state"},{path:"/aliases",name:"Aliases"},{path:"/multi-language",name:"Multi language"},{path:"/development-tools",name:"Development tools"},{path:"/prettier",name:"Prettier"},{path:"/eslint",name:"Eslint"},{path:"/jest",name:"Jest"},{path:"/react-testing-library",name:"React testing library"},{path:"/cypress",name:"Cypress"},{path:"/detox",name:"Detox"},{path:"/test-driven-development",name:"Test driven development"},{path:"/backend-for-frontend",name:"Backend for frontend"},{path:"/ci-cd",name:"CI/CD"},{path:"/api-gateway",name:"Api gateway"},{path:"/universal-link",name:"Universal link"},{path:"/deep-link",name:"Deep link"},{path:"/push-notification",name:"Push notification"},{path:"/code-push",name:"Code push"}],$=function(){var e=Object(q.f)().pathname;return Object(L.jsx)(H,{children:Object(L.jsx)(X,{children:Z.map((function(n){return n.path===e?Object(L.jsx)(Q,{to:n.path,children:n.name},n.path):Object(L.jsx)(K,{to:n.path,children:n.name},n.path)}))})})},ee=U.div(d||(d=Object(M.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow-y: scroll;\n  grid-column: 2 / span 2;\n"]))),ne=U.div(p||(p=Object(M.a)(["\n  padding: 0 ",";\n  ",";\n  ",";\n  ",";\n  ","\n  ","\n  ","\n"])),(function(e){return e.theme.spacers.m}),(function(e){var n=e.theme;return"header"===e.type&&"\n    padding-top: ".concat(n.spacers.m,";\n  ")}),(function(e){return"body"===e.type&&"\n    flex: 1;\n  "}),(function(e){var n=e.theme;return"footer"===e.type&&"\n    padding-bottom: ".concat(n.spacers.m,";\n    background-color: ").concat(n.colors.darkBackground,";\n  ")}),(function(e){return"left"===e.content&&"\n    align-items: flex-start;\n  "}),(function(e){return"center"===e.content&&"\n    justify-content: center;\n    align-items: center;\n  "}),(function(e){return"right"===e.content&&"\n    align-items: flex-end;\n  "})),te=U.a(m||(m=Object(M.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),oe=function(e){var n=e.children,t=e.href,o=e.target;return Object(L.jsx)(te,{href:t,target:o,rel:"noreferrer",children:n})},re=U(C.b)(h||(h=Object(M.a)(["\n  text-decoration: none;\n  color: ",";\n  font-weight: 400;\n"])),(function(e){return e.theme.colors.primary})),ae=U.div(u||(u=Object(M.a)(["\n  height: ",";\n"])),(function(e){var n=e.size,t=e.theme;return n?t.spacers[n]:t.spacers.m})),se=function(e){var n=e.size;return Object(L.jsx)(ae,{size:n})},ie=U.h2(j||(j=Object(M.a)(["\n  color: ",";\n  opacity: ",";\n  font-weight: 400;\n"])),(function(e){var n=e.theme,t=e.color;return t?n.colors[t]:n.colors.text}),(function(e){var n=e.theme,t=e.emphasis;return t?n.emphasis[t]:n.emphasis.high})),ce=function(e){var n=e.children,t=e.color,o=e.emphasis;return Object(L.jsx)(ie,{color:t,emphasis:o,children:n})},le=U.h3(b||(b=Object(M.a)(["\n  color: ",";\n  opacity: ",";\n  font-weight: 400;\n"])),(function(e){var n=e.theme,t=e.color;return t?n.colors[t]:n.colors.text}),(function(e){var n=e.theme,t=e.emphasis;return t?n.emphasis[t]:n.emphasis.high})),de=function(e){var n=e.children,t=e.color,o=e.emphasis;return Object(L.jsx)(le,{color:t,emphasis:o,children:n})},pe=U.h4(x||(x=Object(M.a)(["\n  color: ",";\n  opacity: ",";\n  font-weight: 400;\n"])),(function(e){var n=e.theme,t=e.color;return t?n.colors[t]:n.colors.text}),(function(e){var n=e.theme,t=e.emphasis;return t?n.emphasis[t]:n.emphasis.high})),me=function(e){var n=e.children,t=e.color,o=e.emphasis;return Object(L.jsx)(pe,{color:t,emphasis:o,children:n})},he=U.p(g||(g=Object(M.a)(["\n  color: ",";\n  opacity: ",";\n  font-weight: 300;\n"])),(function(e){var n=e.theme,t=e.color;return t?n.colors[t]:n.colors.text}),(function(e){var n=e.theme,t=e.emphasis;return t?n.emphasis[t]:n.emphasis.high})),ue=function(e){var n=e.children,t=e.color,o=e.emphasis;return Object(L.jsx)(he,{color:t,emphasis:o,children:n})},je=U.span(f||(f=Object(M.a)(["\n  color: ",";\n  opacity: ",";\n  font-weight: 300;\n  background-color: ",";\n"])),(function(e){var n=e.theme,t=e.color;return t?n.colors[t]:n.colors.text}),(function(e){var n=e.theme,t=e.emphasis;return t?n.emphasis[t]:n.emphasis.pure}),(function(e){return e.theme.colors.highlight})),be=function(e){var n=e.children,t=e.color,o=e.emphasis;return Object(L.jsx)(je,{color:t,emphasis:o,children:n})},xe=U.li(O||(O=Object(M.a)(["\n  color: ",";\n  opacity: ",";\n  font-weight: 400;\n"])),(function(e){var n=e.theme,t=e.color;return t?n.colors[t]:n.colors.text}),(function(e){var n=e.theme,t=e.emphasis;return t?n.emphasis[t]:n.emphasis.high})),ge=function(e){var n=e.children,t=e.color,o=e.emphasis;return Object(L.jsx)(xe,{color:t,emphasis:o,children:n})},fe=t(23),Oe=U.div(y||(y=Object(M.a)(["\n  font-family: 'Poppins', sans-serif;\n"]))),ye=function(e){var n=e.code,t=e.language,o=e.showLineNumbers;return Object(L.jsx)(Oe,{children:Object(L.jsx)(fe.a,{text:n,language:t,showLineNumbers:o,theme:fe.b})})},ve=[{path:"/optimization",component:function(){return Object(L.jsxs)(ee,{children:[Object(L.jsx)(ne,{type:"header",children:Object(L.jsx)(ce,{children:"Optimization"})}),Object(L.jsxs)(ne,{type:"body",children:[Object(L.jsx)(ue,{children:"Muchas veces cuando empezamos un proyecto nos ponemos a pensar en todo lo que tenemos que hacer, c\xf3mo y c\xfaando."}),Object(L.jsx)(ue,{children:"La idea de escribir esta gu\xeda es m\xe1s que nada una ayuda memor\xeda, y ver los distintos caminos que se pueden elegir a la hora de optimizar un proyecto ya creado o comenzar con uno."}),Object(L.jsx)(ue,{children:"Los pasos no son estrictos, uno puede elegir por donde ir avanzando por necesidad o prioridades, voy a intentar profundizar en cada una de las optimizaciones sin ser tan aburrido."})]}),Object(L.jsxs)(ne,{type:"footer",children:[Object(L.jsx)(se,{}),Object(L.jsxs)(ue,{color:"white",children:["Pr\xf3ximo paso a optimizar"," ",Object(L.jsx)(re,{to:"/architecture",children:"Architecture"}),"."]})]})]})},exact:!0},{path:"/architecture",component:function(){return Object(L.jsxs)(ee,{children:[Object(L.jsx)(ne,{type:"header",children:Object(L.jsx)(ce,{children:"Architecture"})}),Object(L.jsxs)(ne,{type:"body",children:[Object(L.jsx)(de,{children:"1 - Visual code"}),Object(L.jsx)(ue,{children:"Para poder comenzar con el pie derecho deberiamos tener en cuenta dos cosas muy importantes."}),Object(L.jsxs)("ul",{children:[Object(L.jsx)(ge,{children:"Brand recognition."}),Object(L.jsx)(ge,{children:"The same UI/UX."})]}),Object(L.jsxs)(ue,{children:["Para poder lograr esto necesitamos tener un"," ",Object(L.jsx)(re,{to:"/design-system",children:"Design system"}),". Esto deber\xeda ser proporcionado por el equipo de dise\xf1o siguiendo los design guidelines. Sin duda esto es tarea compleja y necesitmos muchas discuciones y aliniamientos entre el equipo de dise\xf1o, programadores y producto."]}),Object(L.jsx)(ue,{children:"Esto lo podemos separar en tres partes:"}),Object(L.jsx)(me,{children:"Design system"}),Object(L.jsx)(ue,{children:"Es una herramienta colaborativa, creada por componentes re utilizables y guiada por est\xe1ndares. Estos sistemas nos permiten poder administrar de la mejor manera, pudiendo lograr un producto mas eficiente."}),Object(L.jsx)(me,{children:"Documentation"}),Object(L.jsxs)(ue,{children:["Esto nos permite poder tener un lugar donde ver todos los componentes creados. Podemos elegir entre varias herramientas como"," ",Object(L.jsx)(oe,{href:"https://storybook.js.org/",target:"_blank",children:"Storybook"})," ","o"," ",Object(L.jsx)(oe,{href:"https://react-styleguidist.js.org/",target:"_blank",children:"Styleguidist"})," ","."]}),Object(L.jsx)(me,{children:"UI library"}),Object(L.jsxs)(ue,{children:["Para poder re usar los component en distintas plataformas vamos a necesitar publicarlas, las dos mejores son"," ",Object(L.jsx)(oe,{href:"https://bit.dev/",target:"_blank",children:"Bit"})," ","nos da much\xedsima flexibilidad y velocidad a la hora de crearla y utilizarla"," ",Object(L.jsx)(oe,{href:"https://www.npmjs.com/",target:"_blank",children:"npm"})," ","obviamente es una opci\xf3n, pero hoy no da tanta flexibilidad ni velocidad como Bit."]}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(de,{children:"2 - Code structure"}),Object(L.jsx)(ue,{children:"En el d\xeda a d\xeda, se implementan features, se arreglan bugs y se hacen refactor de c\xf3digo si es necesario. Tenemos que mantener el c\xf3digo tratando de que sea f\xe1cil de entender. Pero que pas cuando comenzamos a tener 1, 2 o muchos chicos y grandes proyectos."}),Object(L.jsx)(ue,{children:"C\xf3mo podemos manejar la consistencia del c\xf3digo y la pautas de estructura para todos los proyectos."}),Object(L.jsxs)("ul",{children:[Object(L.jsx)(ge,{children:"La estructura de carpetas en el proyecto."}),Object(L.jsx)(ue,{children:"Cuando los programadores entran a un proyecto por primera vez, si todos los proyectos tienen el mismo encarpetado va a ser mucho mas f\xe1cil de navegar y buscar."}),Object(L.jsx)(ge,{children:"Archivos de configuraci\xf3n o de archivos secundarios."}),Object(L.jsxs)(ue,{children:["Archivos como ",Object(L.jsx)(be,{children:"package.json"}),", ",Object(L.jsx)(be,{children:".gitignore"}),","," ",Object(L.jsx)(be,{children:".editorconfig"}),",",Object(L.jsx)(be,{children:"tsconfig.json"}),","," ",Object(L.jsx)(be,{children:".eslintrc"}),", ",Object(L.jsx)(be,{children:".prettierrc"}),"."]}),Object(L.jsx)(ge,{children:"Ubicaci\xf3n fija de los tipos de archivos."}),Object(L.jsx)(ue,{children:"Debemos intentar seguir la misma ubicaci\xf3n siempre que sea la misma estructura. C\xf3mo por ejemplo la posible estructura de un componente."}),Object(L.jsx)(ye,{code:"/component\n--/__test__\n----/component.test.tsx\n--/base.tsx|ts\n--/component.tsx\n--/style.css\n--/component.md\n--/index.ts\n",language:"javascript",showLineNumbers:!1}),Object(L.jsx)(ue,{children:"Es un ejemplo de posibles archivos que tengan un componente, lo voy a profundizar m\xe1s adelante."}),Object(L.jsx)(ge,{children:"Estructura interna de los componentes"}),Object(L.jsx)(ue,{children:"Del mismo modo la estructura dentro de un archivo deber\xeda ser la misma, orden de imports, exports, funcional component hooks render, types etc."}),Object(L.jsx)(ye,{code:"import React, { FunctionComponent, ReactElement } from 'react';\nimport { Modal } from 'react-native';\n\nimport styled from '@core/theme/styled-components';\nimport { Overlay, WrapperModal } from './base';\n\nconst Wrapper = styled(WrapperModal)`\n  justify-content: flex-end;\n`;\n\nconst Panel = styled.View`\n  background-color: white;\n  padding: 30px 16px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n`;\n\nconst SafeAreaView = styled.SafeAreaView`\n  background-color: white;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n`;\n\ninterface ModalBottomProps {\n  /** Show modal */\n  visible: boolean;\n  /** Text to be displayed inside modal. */\n  header?: ReactElement;\n  /** Modal content */\n  content: ReactElement;\n}\n\nexport const ModalBottom: FunctionComponent<ModalBottomProps> = ({\n  visible,\n  header,\n  content,\n}) => (\n  <Modal visible={visible} animationType=\"slide\" transparent>\n    <Overlay />\n    <Wrapper>\n      <SafeAreaView>\n        <Panel>\n          {header}\n          {content}\n        </Panel>\n      </SafeAreaView>\n    </Wrapper>\n  </Modal>\n);\n",language:"javascript",showLineNumbers:!1}),Object(L.jsx)(ue,{children:"Este es un t\xf3pico complejo que tambi\xe9n profundizaremos mas adelante."}),Object(L.jsx)(ge,{children:"Convenciones de nombres"}),Object(L.jsx)(ue,{children:"Esto incluye nombres de carpetas, archivos, variables, funciones, clases, tipos, etc."}),Object(L.jsx)(ue,{children:"Sin duda se puede discutir horas este tema lo normal es tomar estandares o elegir lo que al equipo le guste m\xe1s usar."}),Object(L.jsx)(ge,{children:"Convenciones de codificaci\xf3n"}),Object(L.jsx)(ue,{children:"En general, dir\xeda que las convenciones de codificaci\xf3n es una secci\xf3n muy amplia, pero aqu\xed solo quiero incluir cosas que no encajan en el resto de las secciones, como ; o no ; y similares."})]}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(de,{children:"3 - Tech Stack"}),Object(L.jsx)(ue,{children:"C\xf3mo en la secci\xf3n anterior, queremos tener una unificaci\xf3n del stack cross proyectosde la organizaci\xf3n. La razon es muy similar a la anterior cuando un programador entra nuevo o pasa de un proyecto a otro se tiene que ver familiarizado con las tecnolog\xedas."}),Object(L.jsx)(ue,{children:"En los proyectos de Frontend, podemos ver varios tipos de stacks, todos liderados por el lenguaje seleccionado por lo general javascript como en este caso, pero pueden ser otros."}),Object(L.jsx)(ue,{children:"Mensiono ac\xe1 un stack gen\xe9rico que puede llegar a adaptarse a la mayor\xeda de los proyectos, podr\xeda llegar a ser un buen punto de partida."}),Object(L.jsxs)("ul",{children:[Object(L.jsx)(ge,{children:Object(L.jsx)(oe,{href:"https://reactnative.dev/",target:"_blank",children:"React native"})}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(ge,{children:Object(L.jsx)(oe,{href:"https://www.typescriptlang.org/",target:"_blank",children:"Typescript"})}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(ge,{children:Object(L.jsx)(oe,{href:"https://reactnavigation.org/",target:"_blank",children:"React navigation"})}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(ge,{children:Object(L.jsx)(oe,{href:"https://recoiljs.org/",target:"_blank",children:"Recoil"})}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(ge,{children:Object(L.jsx)(oe,{href:"https://styled-components.com/",target:"_blank",children:"Styled components"})}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(ge,{children:Object(L.jsx)(oe,{href:"https://jestjs.io/",target:"_blank",children:"Jest"})}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(ge,{children:Object(L.jsx)(oe,{href:"https://github.com/wix/Detox",target:"_blank",children:"Detox"})})]}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(de,{children:"4 - Tooling"}),Object(L.jsx)(ue,{children:"Este tema es muy importante. Usamos algunas herramientas adicionales ahora en casi todas partes: para crear aplicaciones, CI, generadores de componentes y mucho m\xe1s. Por eso veo si podemos elegir las herramientas correctas para nuestros proyectos; es crucial. Buenas herramientas vs malas herramientas (o ninguna herramienta), es lo mismo que una comparaci\xf3n entre la automatizaci\xf3n y las pruebas manuales."}),Object(L.jsx)(ue,{children:"Por ejemplo, si tiene un estilo de coding style, puede darles a las personas el conjunto de herramientas de linting, que de manera predeterminada sigan esas reglas."}),Object(L.jsxs)("ul",{children:[Object(L.jsx)(ge,{children:"Code style and structure."}),Object(L.jsx)(ue,{children:"Como comentamos antes, esto se puede automatizar f\xe1cilmente con herramientas."}),Object(L.jsx)(ge,{children:"Project bootstrapping."}),Object(L.jsx)(ue,{children:"No es necesario crear una nueva estructura de proyecto, instalar manualmente todos los paquetes que se necesitan, etc."}),Object(L.jsx)(ge,{children:"Components generation."}),Object(L.jsx)(ue,{children:"La mayor\xeda de las veces, alg\xfan componente de su aplicaci\xf3n no contiene un solo archivo, por lo que la creaci\xf3n de archivos, vincularlos / importarlos puede llevar tiempo, por lo que esto se puede automatizar."}),Object(L.jsx)(ge,{children:"Start and Build."}),Object(L.jsx)(ue,{children:"Por supuesto, lo m\xe1s obvio para automatizar: c\xf3mo construye o inicia su aplicaci\xf3n."}),Object(L.jsx)(ge,{children:"Test."}),Object(L.jsx)(ue,{children:"El proceso de crear su aplicaci\xf3n para pruebas y ejecutar todo tipo de pruebas: unit, integration, ent to end."}),Object(L.jsx)(ge,{children:"Dependencies management."}),Object(L.jsx)(ue,{children:"Como sabemos, alrededor del 80% de nuestro c\xf3digo ahora son dependencias. Por lo tanto, debemos mantenerlos actualizados y administrar eso en una gran empresa no es algo f\xe1cil de hacer."}),Object(L.jsx)(ge,{children:"Cross-projects dependencies."}),Object(L.jsx)(ue,{children:"Lo m\xe1s probable es que nuestros proyectos no funcionen de forma aislada y puedan depender de otros proyectos o ser una dependencia de alg\xfan otro proyecto, por lo que es posible que necesitemos algunas herramientas para facilitar el proceso de vincularlos, desarrollando en una combinaci\xf3n de m\xfaltiples proyectos (como Bit , por ejemplo)."}),Object(L.jsx)(ge,{children:"CI."}),Object(L.jsx)(ue,{children:"La CI es una parte esencial de nuestro conjunto de herramientas diarias y la automatizaci\xf3n y unificaci\xf3n de la misma puede ser un trabajo muy beneficioso para su organizaci\xf3n."})]}),Object(L.jsx)(ue,{children:"Todos los proyectos son iguales y se mantienen y administran mediante el conjunto de herramientas unificado. Cada proyecto puede comenzar y construir de la misma manera. Los nuevos componentes se generan en el mismo lugar y con las mismas pautas de nomenclatura."}),Object(L.jsx)(ue,{children:'Pero es as\xed de "dulce" o tiene inconvenientes? Como ocurre con cualquier soluci\xf3n, tiene desventajas. Uno de ellos: se necesita algo de tiempo para incorporar nuevos programadores a su empresa. Pero si todo se hace de una manera muy natural (como la gente ya se acostumbr\xf3 en otras herramientas existentes) y se documenta, entonces esto no se convierte en un gran problema cuando se compara con los beneficios de la velocidad de desarrollo, una oportunidad para que los programadores trabajen con cualquier base de c\xf3digo f\xe1cilmente.'}),Object(L.jsx)(se,{size:"xs"}),Object(L.jsx)(de,{children:"5 - Production"}),Object(L.jsx)(ue,{children:"En esta parte de frontend architecture, los programadores son los que menos se preocupan. Tal vez porque no est\xe1 conectado con el c\xf3digo en s\xed la mayor parte del tiempo y probablemente no sea tan emocionante, pero no menos importante."})]}),Object(L.jsxs)(ne,{type:"footer",children:[Object(L.jsx)(se,{}),Object(L.jsxs)(ue,{color:"white",children:["Pr\xf3ximo paso a optimizar"," ",Object(L.jsx)(re,{to:"/folder",children:"Folder"}),"."]})]})]})},exact:!0},{path:"/prettier",component:function(){return Object(L.jsxs)(ee,{children:[Object(L.jsx)(ne,{type:"header",children:Object(L.jsx)(ce,{children:"Prettier"})}),Object(L.jsxs)(ne,{type:"body",children:[Object(L.jsx)(ue,{children:"Es una herramienta que te ayuda a formatear el c\xf3digo."}),Object(L.jsxs)(ue,{children:["Cuando se trabaja en equipo es muy dif\xedcil mantener la consistencia del c\xf3digo de la aplicaci\xf3n, para eso se usa una herramienta como"," ",Object(L.jsx)(oe,{href:"https://prettier.io/",target:"_blank",children:"Prettier"})," ","para poder resolver este problema."]}),Object(L.jsx)(de,{children:"Por qu\xe9 necesitamos una herramienta para formateo del c\xf3digo?"}),Object(L.jsxs)("ol",{children:[Object(L.jsx)(ge,{emphasis:"medium",children:"C\xf3digo m\xe1s f\xe1cil de entender."}),Object(L.jsx)(ge,{emphasis:"medium",children:"Mantiene un estilo consistente del c\xf3digo en todo el equipo."}),Object(L.jsx)(ge,{emphasis:"medium",children:"Mantiene buenas pr\xe1cticas."}),Object(L.jsx)(ge,{emphasis:"medium",children:"Salva tiempo al momento de acomodar el c\xf3digo."})]}),Object(L.jsx)(de,{children:"1 - Instalaci\xf3n"}),Object(L.jsx)(ue,{children:"Comenzamos instalando la librer\xeda."}),Object(L.jsx)(ye,{code:"npm i -D prettier eslint-config-prettier eslint-plugin-prettier",language:"javascript",showLineNumbers:!1}),Object(L.jsxs)(ue,{children:["Y en la ra\xedz del proyecto creamos un archivos llamado"," ",Object(L.jsx)("strong",{children:".eslintrc"})," donde agregamos el siguiente contenido."]}),Object(L.jsx)(ye,{code:'{\n  "extends": ["react-app", "plugin:prettier/recommended"]\n}',language:"javascript",showLineNumbers:!1}),Object(L.jsxs)(ue,{children:["Este archivos va a ser usado mucho m\xe1s en detalle en"," ",Object(L.jsx)("strong",{children:"Eslint"}),"."]}),Object(L.jsx)(de,{children:"2 - Configurar VSCode con Prettier"}),Object(L.jsx)(ue,{children:"Buscamos en extensiones del VSCode Prettier y lo instalamos, esto va a hacer que cuando salvemos nuestro archivos se formatee."}),Object(L.jsx)(ue,{children:"ACA VA LA IMAGEN"}),Object(L.jsx)(ue,{children:"Solo nos falta ir a preference/settings."}),Object(L.jsx)(ye,{code:'"editor.formatOnSave": false,\n"[javascript]": {\n  "editor.formatOnSave": true\n},\n',language:"javascript",showLineNumbers:!1}),Object(L.jsx)(ue,{children:"Formatos posibles."}),Object(L.jsx)(ye,{code:"javascript\njavascriptreact\ntypescript\ntypescriptreact\njson\ngraphql\n",language:"javascript",showLineNumbers:!1}),Object(L.jsx)(ue,{children:"Ya estamos listo para usar Prettier en el proyecto."})]}),Object(L.jsxs)(ne,{type:"footer",children:[Object(L.jsx)(se,{}),Object(L.jsxs)(ue,{color:"white",children:["Pr\xf3ximo paso a optimizar"," ",Object(L.jsx)(re,{to:"/eslint",children:"Eslint"}),"."]})]})]})},exact:!0},{path:"/eslint",component:function(){return Object(L.jsx)("h2",{children:"Eslint page"})},exact:!0}],we=function(){return Object(L.jsx)("h2",{children:"404"})},ze=function(){var e=ve.map((function(e){return Object(L.jsx)(q.a,Object(E.a)({},e),e.path)}));return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(T,{children:[Object(L.jsx)(W,{}),Object(L.jsx)(Y,{}),Object(L.jsx)($,{}),Object(L.jsxs)(q.c,{children:[e,Object(L.jsx)(q.a,{component:we})]})]})})},ke=function(e){e&&e instanceof Function&&t.e(155).then(t.bind(null,238)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),o(e),r(e),a(e),s(e)}))};k.a.render(Object(L.jsx)(w.a.StrictMode,{children:Object(L.jsx)(C.a,{children:Object(L.jsx)(ze,{})})}),document.getElementById("root")),ke()}},[[52,152,153]]]);
//# sourceMappingURL=main.b1ba02e3.chunk.js.map