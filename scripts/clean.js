import * as fs from "fs";
import { libDir, libDirBrowser, libDirNode } from "./paths.js";

fs.promises
  .rm(libDir, { recursive: true, force: true })
  .then(() => fs.promises.mkdir(libDir))
  .then(() =>
    Promise.all([
      fs.promises.mkdir(libDirBrowser),
      fs.promises.mkdir(libDirNode),
    ])
  )
  .catch((err) => {
    console.error(err);
    console.error("script failed: clean");
  });
