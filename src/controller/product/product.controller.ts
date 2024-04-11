import { Body, Controller, Get, Param, Post } from '@nestjs/common/decorators';
import { ProductService } from 'src/service/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('')
  async list() {
    return this.productService.list();
  }

  @Get(':id')
  async detail(@Param('id') product: string) {
    return this.productService.detail(product);
  }

  @Post()
  async create(@Body() body: any) {
    return this.productService.create(body);
  }
}
