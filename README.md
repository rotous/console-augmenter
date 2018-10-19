# console-augmenter

All modern browsers and NodeJS support the functions `console.debug()`, `console.log()`, `console.info()`,
`console.warn()` and `console.error()`. And some browsers even have a feature to only
show what you want in the developer tools console.

This module however adds functionality to set the log level in the code. This way you can
leave your debug logging in your code and just set another log level for your production
build so the end user will not see the logs.

## Installation
If you have an NPM project you can use:

```
npm install console-augmenter
```

and include the script as

```
import 'console-augmenter';
```

Otherwise you can download the `bundle.min.js` (together with `bundle.min.js.map`), put it somewhere in your project and
add it to your html with:

```
<script src='<LOCATION_RELATIVE_TO_YOUR_HTML_FILE/>bundle.min.js'></script>
```

## Usage
When you have included the script, you can just use the functions `console.debug`, `console.log`, `console.info`,
`console.warn` and `console.error` just like you are used to.

Change the log level of your application by calling the `logLevel()` function:

```
console.logLevel(console.LL_ERROR); // only log error messages
```

Use one of these log levels:
- console.LL_ALL
- console.LL_LOG
- console.LL_INFO
- console.LL_WARN
- console.LL_ERROR
- console.LL_NONE

Add timestamps to your logs with the `addTimestamps()` function:

```
console.addTimestamps(true);
console.log('Hello world!); \\ [date - time] Hello world!
console.addTimestamps(false);
console.log('Hello world!); \\ Hello world!
```
