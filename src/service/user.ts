import { Init, Provide, Scope, ScopeEnum } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

@Provide()
@Scope(ScopeEnum.Singleton)
export class UserService {
  @Init()
  public async init(): Promise<void> {
    console.log('我被构造了')
  }
  
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
