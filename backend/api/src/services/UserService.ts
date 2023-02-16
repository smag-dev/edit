//import UserModel from "../model/ProductModel";

class UserService {
  async create(user: any) {
    console.log(user);
    console.log(' create ProductService')
    return user;
  }

  async login(user:any) {
    console.log(' login UserService')
    return user;
  }

  async getAll() {
    console.log(' getAll UserService')
    return [{email:"teste@teste.com", password:"password"},{email:"teste@teste.com2", password:"password2"} ];
  }
  
  async getOne(id: string) {
    console.log(' getOne UserService')
    return {email:"teste@teste.com", password:"password"};
  }
}

export default new UserService();
