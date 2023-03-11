import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UsePipes,ValidationPipe } from "@nestjs/common";
import { LoginForm } from "../DTOs/loginform.dto";
import { LoginService } from "../Services/login.service";

@Controller("/logincon")
export class LoginController 
{
    constructor(private loginService: LoginService){}

    @Get("/index")
    getIndex():any {
        return this.loginService.getIndex();
    }

    @Post("/login")
    @UsePipes(new ValidationPipe())
      signup(@Body() mydto:LoginForm): any {
      return this.loginService.signup(mydto);
    }    
  }
