import { Body, Controller, Get, Post } from '@nestjs/common/decorators';
import { SendTokensDTO, TokenAmountDTO } from 'src/domain/token/token.dto';
import { TokenService } from 'src/service/token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('/latest-price')
  async getBalance() {
    return this.tokenService.getBalance();
  }

  @Post('/token-amount')
  async tokenAmount(@Body() body: TokenAmountDTO) {
    return this.tokenService.getTokenAmount(body);
  }

  @Post('/send-tokens')
  async transfer(@Body() body: SendTokensDTO) {
    this.tokenService.transfer(body);
  }
}
