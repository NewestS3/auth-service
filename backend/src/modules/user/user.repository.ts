import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/lib/db/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/userregister.dto";

export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repo:  Repository<UserEntity>
    ){}


    async insertuser(createuserdto:CreateUserDto)
    {
        try{
            const newuser=this.repo.create(createuserdto);
            return this.repo.save(newuser);
        }catch(err)
        {
            throw err;
        }
    }
}