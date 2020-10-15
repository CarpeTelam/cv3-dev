import fs from "fs";
import glob from "glob";
import moment from "moment";
import extractZip from "extract-zip";

const baseDir = process.cwd();
const storePath = `${baseDir}/store.json`;
const store = fs.existsSync(storePath)
  ? JSON.parse(fs.readFileSync(storePath, "utf8"))
  : false;

function getModified(name) {
  const time = moment(fs.statSync(name).mtime).unix();
  return { name, time };
}

function sortModified(a, b) {
  return a.time - b.time;
}

function writeFile(path, json) {
  const content = JSON.stringify(json, null, 2);
  const callback = (error) =>
    error
      ? console.log(error)
      : console.log(`${path.replace(baseDir, ".")} updated`);
  fs.stat(path, () => {
    fs.writeFile(path, content, callback);
  });
}

function processFiles(src, dest) {
  glob(`${src}/*.zip`, null, (error, files) => {
    error && console.log(error);
    files = files
      .map(getModified)
      .sort(sortModified)
      .map((file) => {
        extractZip(file.name, { dir: dest }, (error) => {
          if (error) {
            console.log(error);
            return;
          }
          const timestamp = parseInt(moment().unix());
          console.log(`${file.name.replace(baseDir, ".")} extracted`);
          writeFile(`${baseDir}/store.json`, { ...store, timestamp });
        });
      });
  });
}

function extract() {
  if (!store) {
    console.log(
      "Please run `cv3-dev setup` to create the proper config files."
    );
    process.exit();
  }

  return (() => {
    processFiles(`${baseDir}/extract/store`, `${baseDir}/store`);
    processFiles(
      `${baseDir}/extract/bootstrap`,
      `${baseDir}/extract/bootstrap/bootstrap`
    );
  })();
}

export default extract;
