import { TokenInfo, ICopyToken } from './Interface';
import { CopyToken } from './CopyToken';
const NFTCopyTokenAddress = '0xBEd1bb84251dC2f2eb7208dE4bc72950bC636BD9';
import { CopyTokenAbi } from './CopyTokenAbi';
import { ethers, Contract, BigNumber, Web3Provider, Signer } from '../utils';
import { continueStatement } from '@babel/types';
export class ERC1155CopyToken extends CopyToken {
  signer: Signer;
  copyTokenContract_ro!: Contract;
  constructor(provider: Web3Provider) {
    super(NFTCopyTokenAddress, 'v0.0.2');
    console.log(provider);
    this.copyTokenContract_ro = new Contract(NFTCopyTokenAddress, CopyTokenAbi, provider); // erc1155
    this.signer = provider.getSigner();
    console.log(this.signer);
  }
  getVersion(): string {
    return this.version;
  }
  balanceOf(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.signer.getAddress().then((user) => {
        console.log(user);
        try {
          this.copyTokenContract_ro.balanceOf(user, 0x7ae3).then((x: BigNumber) => {
            resolve(x.toString());
          });
        } catch (error) {
          reject('error');
        }
      });
    });
  }
  getInfo(): TokenInfo {
    return { contractAddress: this.copyToken, version: this.version };
  }
}
