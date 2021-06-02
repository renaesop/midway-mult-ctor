import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { UserService } from '../service/user';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  userService: UserService;

  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }
}
