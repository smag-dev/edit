import ProductModel from "../model/ProductModel";
import FileService from "./FileService";

class ProductService {
  async create(product: any, image: any) {
    throw new Error("teste");
    console.log(product);
    console.log(" create ProductService");
    /*verifica se existe ficheiro de imagem */
    if (image) {
      /* constroi o objecto pois acima  só chamei o ficheiro*/
      const fileservice = new FileService();
      /*grava a imagem */
      const fileName = fileservice.save(image);
      product = { ...product, image: fileName };
    }
    const createdProduct = await ProductModel.create(product);
    return createdProduct;
  }
  async getAll() {
    console.log(" getAll ProductService");
    const products = await ProductModel.find();
    return products;
  }
  async getOne(id: string) {
    console.log(" getOne ProductService");
    console.log(id);
    const product = await ProductModel.findById(id);
    return product;
  }
  async update(id: string, product: any, image: any) {
    console.log(" update ProductService");
    /*verifica se existe ficheiro de imagem */
    if (image) {
      /* constroi o objecto pois acima  só chamei o ficheiro*/
      const fileservice = new FileService();
      /*grava a imagem */
      const fileName = fileservice.save(image);
      product = { ...product, image: fileName };
    }
    let productObj = { ...product, updatedAt: Date.now() };
    console.log(productObj);
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      productObj,
      {
        new: true,
      }
    );
    return updatedProduct;
  }
  async delete(id: string) {
    console.log(" delete ProductService");
    console.log(id);
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    return deletedProduct;
  }
}

export default new ProductService();
