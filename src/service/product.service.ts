import { Injectable } from '@nestjs/common/decorators';
import { Web3 } from 'web3';
import * as ABI from '../../TextileEcoTrace.json';

@Injectable()
export class ProductService {
  private web3 = new Web3(process.env.BLOCKCHAIN_PROVIDER);
  private contract = new this.web3.eth.Contract(
    ABI,
    process.env.MANAGEMENT_CONTRACT_ADDRESS,
    { from: process.env.WALLET, gasPrice: '21632' },
  );
  constructor() {
    const account = this.web3.eth.accounts.privateKeyToAccount(
      process.env.PRIVATE_KEY,
    );

    this.web3.eth.accounts.wallet.add(account);
  }

  async detail(product: string) {
    const targetProduct = await this.contract.methods
      .getProductInfo(product)
      .call();

    return targetProduct;
  }

  async list() {
    const allProducts = await this.contract.methods.listAllProducts().call();
    return allProducts;
  }

  async create(body: any) {
    const allProducts = await this.contract.methods
      .createProduct(
        body.recipient,
        body.sku,
        body.name,
        body.composition,
        body.certificates,
        body.manufacturingDate,
        body.tokenURI,
        body.tokenAmount,
      )
      .send();
    return allProducts;
  }
}
