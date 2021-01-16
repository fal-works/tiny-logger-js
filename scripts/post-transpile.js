import * as fs from "fs";
import { libDirNode, libDirNodeEsmTmp } from "./paths.js";

// move & rename lib for Node esm, then remove the old directory

fs.promises
  .rename(`${libDirNodeEsmTmp}/index.js`, `${libDirNode}/index.mjs`)
  .then(() =>
    fs.promises.rm(libDirNodeEsmTmp, { recursive: true, force: true })
  )
  .catch((err) => {
    console.error(err);
    console.error("script failed: post-transpile");
  });
