import * as fs from "fs";

fs.promises.rm("lib", { recursive: true, force: true }).catch((err) => {
  console.error(err);
  console.error("script failed: clean");
});
