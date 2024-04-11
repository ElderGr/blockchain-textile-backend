import { Module } from '@nestjs/common/decorators';
import { ProductController } from 'src/controller/product/product.controller';
import { ProductService } from 'src/service/product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
