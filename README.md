# esbuild output
```js
(() => {
  // src/foo/bar.js
  console.log("bar");

  // src/index.js
  console.log("index");
})();
```

# rolldown output
```js
//#region src/foo/bar.js
console.log("bar");

//#endregion
//#region src/foo/bar.js
console.log("bar");

//#endregion
//#region src/index.js
console.log("index");

//#endregion
```
