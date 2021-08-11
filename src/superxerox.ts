// TODO: add features
const CRYPTOKITTY_ADDRESS = '0x06012c8cf97bead5deae237070f9587f8e7a266d'; // mainnet
const DEFAULT_PAY_TOKEN_ADDRESS = '0x19a375a4e9972690ad876ac4722993e02335b823'; // ropsten, copy super token

import { PayableNFTCopyMachine, Info } from './core';

export class SuperXEROX extends PayableNFTCopyMachine {
  constructor() {
    const PayTokenAddress = '0x19a375a4e9972690ad876ac4722993e02335b823' // superfluid NativeSuperToken, ERC-20
    const NFTaddress = '0x06012c8cf97bead5deae237070f9587f8e7a266d' // cryptokitties (as example)  
    const NFTCopyAddress = '0xBEd1bb84251dC2f2eb7208dE4bc72950bC636BD9' // NFT COPY token (ERC-1155)
    super(PayTokenAddress, NFTaddress, NFTCopyAddress);
  }

  vers(): string {
    return this.version;
  }

  copy(): void {
    throw new Error('Method not implemented.');
  }
  info(): Info {
    return {
      version: this.version,
      NFT_Address: this.nftToken,
      payTokenAddress: this.payToken,
    };
  }
}