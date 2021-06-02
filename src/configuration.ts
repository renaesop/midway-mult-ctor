import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import { UserService } from './service/user';

@Configuration({
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady(container: IMidwayContainer) {
    await Promise.all([1, 2].map(async () => {
      await container.getAsync<UserService>('userService')
    }))
  }
}
