import { Module } from '@nestjs/common/decorators';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from './modules/token.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [ConfigModule.forRoot(), TokenModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
