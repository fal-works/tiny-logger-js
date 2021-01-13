import * as fs from "fs";
import { libDirNode, libDirNodeEsmTmp } from "./paths.js";

fs.promises
  .rename(`${libDirNodeEsmTmp}/index.js`, `${libDirNode}/index.mjs`)
  .then(() =>
    fs.promises.rm(libDirNodeEsmTmp, { recursive: true, force: true })
  )
  .catch((err) => {
    console.error(err);
    console.error("script failed: post-transpile");
  });
