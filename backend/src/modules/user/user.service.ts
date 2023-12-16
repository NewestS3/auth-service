import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/userregister.dto";

@Injectable()
export class UserService{
    constructor(
        private userrepo:UserRepository
    ){}

    async insertuser(createuserdto:CreateUserDto)
    {
        try{
            return this.userrepo.insertuser(createuserdto);
        }catch(err){
            throw err;
        }
    }
}