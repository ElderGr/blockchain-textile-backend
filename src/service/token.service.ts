import { Injectable } from '@nestjs/common/decorators';
import { Web3 } from 'web3';
import * as ABI from '../../TextileEcoTraceShop.json';
import { SendTokensDTO, TokenAmountDTO } from 'src/domain/token/token.dto';

@Injectable()
export class TokenService {
  private web3 = new Web3(process.env.BLOCKCHAIN_PROVIDER);
  private contract = new this.web3.eth.Contract(
    ABI,
    process.env.SHOP_CONTRACT_ADDRESS,
    {
      from: process.env.WALLET,
      gasPrice: '21632',
    },
  );

  constructor() {
    const account = this.web3.eth.accounts.privateKeyToAccount(
      process.env.PRIVATE_KEY,
    );

    this.web3.eth.accounts.wallet.add(account);
  }

  async transfer(body: SendTokensDTO) {
    await this.contract.methods.sendTokens(body.to, body.amount).send();
  }

  async getTokenAmount(body: TokenAmountDTO) {
    const tokenAmount: any = await this.contract.methods
      .tokenAmount(body.amount)
      .call();

    return this.web3.utils.fromWei(tokenAmount, 'wei');
  }

  async getBalance() {
    const balance: any = await this.contract.methods.getLatestPrice().call();
    return this.web3.utils.fromWei(balance, 'wei');
  }
}
