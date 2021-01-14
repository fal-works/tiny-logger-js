# tiny-logger

Creates custom functions that emit logs with prefix.

## on Node.js

```js
import * as logger from "@fal-works/tiny-logger";

const log = logger.create("[any prefix]", process.stdout, console.log);
const logSimple = logger.createSimple("[any prefix]", process.stdout);
```

## on browsers

```js
import * as logger from "@fal-works/tiny-logger";

const log = logger.create("[any prefix]", console.log);
```
