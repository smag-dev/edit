import UserModel from "../model/UserModel";

class UserService {
  async create(user: any) {
    console.log(user);
    const newUser = await UserModel.create(user);
    return newUser;
  }

  async login(user:any) {
    const {email,password} = user;
    const login =  await UserModel.find({email : email});
    let newUser = {...user, lastLogin: Date.now()};
    if (login){
        console.log('entrou')
        newUser = await UserModel.findOneAndUpdate({email : email}, newUser);
        console.log(newUser)
    }
    return newUser;
  }

  async getAll() {
    const users = await UserModel.find()
    return users;
  }

  async getOne(id: string) {
    const user = await UserModel.findById(id)
    return user;
  }
}

export default new UserService();
