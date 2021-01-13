import * as fs from "fs";

fs.promises
  .rename("lib/node-esm/index.js", "lib/node/index.mjs")
  .then(() => fs.promises.rm("lib/node-esm", { recursive: true, force: true }))
  .catch((err) => {
    console.error(err);
    console.error("script failed: post-transpile");
  });
