class ProductService {
  create(product: any) {
    console.log(product);
    console.log(' create ProductService')
    return product;
  }
  getAll() {
    const products = {id:1}
    console.log(' getAll ProductService')
    return products;
  }
  getOne(id: string) {
    console.log(' getOne ProductService')
    console.log(id)
    return id;
  }
  update(id: string, product: any) {
    console.log(' update ProductService')
    console.log(id)
    console.log(product)
    return product;
  }
  delete(id: string) {
    console.log(' delete ProductService')
    console.log(id)
    return id;
  }
    
}

export default new ProductService();
