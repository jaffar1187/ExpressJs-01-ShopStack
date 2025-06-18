const fsPromises = require("fs/promises");
const path = require("path");
const rootDirectory = require("./../utils/pathCreate");

let products = [];

class ProductModel {
  constructor(title) {
    this.title = title;
  }

  async saveAndFetchUtil(isWriteop) {
    let dataPath = path.join(rootDirectory, "data", "products.json");
    try {
      const fileContent = await fsPromises.readFile(dataPath);
      products = JSON.parse(fileContent);
      if (isWriteop) {
        products.push(this);
        await fsPromises.writeFile(dataPath, JSON.stringify(products));
      } else return products;
    } catch (err) {
      if (isWriteop) {
        products.push(this);
        await fsPromises.writeFile(dataPath, JSON.stringify(products));
      } else return products;
    }
  }

  async save() {
    await saveAndFetchUtil(true);
  }

  static async fetchAll() {
    await saveAndFetchUtil();
  }
}

module.exports = ProductModel;
