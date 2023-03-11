import { Body,Session,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UsePipes,ValidationPipe } from "@nestjs/common";
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { LoginForm } from "../DTOs/loginform.dto";
import { LoginService } from "../Services/login.service";
import { SessionGuard } from "../session.guard";

@Controller("/logincon")
export class LoginController 
{
    constructor(private loginService: LoginService){}

    @Get("/index")
    getIndex():any {
        return this.loginService.getIndex();
    }

    @Post("/signup")
    @UsePipes(new ValidationPipe())
      signup(@Body() mydto:LoginForm): any {
      return this.loginService.signup(mydto);
    }    

  @Get("/signin")
    signin(@Session() session, @Body() mydto:LoginForm):any
    {
    if(this.loginService.signin(mydto))
    {
        session.email = mydto.email;

        console.log(session.email);
        return {message:"success"};
    }
    else
    {
        return {message:"invalid credentials"};
    }
    }

@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}
}