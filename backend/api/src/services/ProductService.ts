import ProductModel from "../model/ProductModel";

class ProductService {
  async create(product: any) {
    console.log(product);
    console.log(" create ProductService");
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
  async update(id: string, product: any) {
    console.log(" update ProductService");
    console.log(id);
    console.log(product);
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
