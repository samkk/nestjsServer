import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @ApiTags('Hello')
  @ApiOperation({
    summary: '测试接口',
    description: 'hello模块',
  })
  @ApiQuery({
    name: 'id',
    description: '这是用户id',
  })
  // @ApiParam({ id: string })
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }
}
