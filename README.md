# Chatshipper custom eslint rules

## How to install

Add the plugin using npm or yarn:

```bash
$ npm install git+https://github.com/chatshipper/estlint-plugin-chatshipper
```

## How to configure

On *eslintrc.js* add the following lines:

```js
module.exports = {
    
    (...)
    plugins: ["chatshipper"],
    (...)
    rules: {
        "chatshipper/logger-warning-not-a-function": "error"
    }
    (...)
};
```
