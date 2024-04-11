import { Module } from '@nestjs/common/decorators';
import { TokenController } from 'src/controller/token/token.controller';
import { TokenService } from 'src/service/token.service';

@Module({
  imports: [],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
