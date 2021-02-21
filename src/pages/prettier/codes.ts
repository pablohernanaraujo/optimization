export const install = `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`;

export const eslintrc = `{
  "extends": ["react-app", "plugin:prettier/recommended"]
}`;

export const settings = `"editor.formatOnSave": false,
"[javascript]": {
  "editor.formatOnSave": true
},
`;

export const formats = `javascript
javascriptreact
typescript
typescriptreact
json
graphql
`;
