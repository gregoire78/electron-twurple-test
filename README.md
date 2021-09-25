# electron-test
repository for report bug

In the `src/preload.js` file I import @twurple/api and @twurple/auth.

This worked well with webpack 4 (electron-forge/webpack-plugin v6.0.0-beta.54) but not with webpack 5 (electron-forge/webpack-plugin v6.0.0-beta.61).

```
Uncaught (in promise) Error: _d_fischer_cross_fetch__WEBPACK_IMPORTED_MODULE_2__.Headers is not a constructor
```

## installation

`yarn`

## start app

`yarn start`
