import { Injectable } from "@nestjs/common";
import { LoginEntity } from "../Entities/logininfo.entity";
import { LoginForm } from "../DTOs/loginform.dto";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { Repository } from "typeorm";

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private studentRepository: Repository<LoginEntity>
  ) {}

getIndex():any { 
    return this.studentRepository.find();
}

async signup(mydto:LoginForm) {
    
      const login = new LoginEntity();
      const salt = await bcrypt.genSalt();
      const hassedpassed = await bcrypt.hash(mydto.password, salt);
      login.email = mydto.email;
      login.password = hassedpassed;
      return this.studentRepository.save(login);

    }

    async signin(mydto:LoginForm){
    const mydata= await this.studentRepository.findOneBy({email: mydto.email});
    const isMatch= await bcrypt.compare(mydto.password, mydata.password);
   
    if(isMatch) 
    return true;
    
    else 
    return false;    
    }
}
