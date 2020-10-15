import fs from "fs";
import openBrowser from "react-dev-utils/openBrowser";

const baseDir = process.cwd();
const storePath = `${baseDir}/store.json`;
const store = fs.existsSync(storePath)
  ? JSON.parse(fs.readFileSync(storePath, "utf8"))
  : false;

function open() {
  if (!store || store.stagingURL === "") {
    console.log(
      "Please run `cv3-dev setup` to create the proper config files."
    );
    process.exit(1);
  }

  return () => {
    openBrowser(store.stagingURL);
  };
}

export default open;
