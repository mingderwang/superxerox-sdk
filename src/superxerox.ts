// TODO: add features
const CRYPTOKITTY_ADDRESS = '0x06012c8cf97bead5deae237070f9587f8e7a266d'; // mainnet
const DEFAULT_PAY_TOKEN_ADDRESS = '0x19a375a4e9972690ad876ac4722993e02335b823' // ropsten, copy super token

interface CopyMachine {
  info(): Info;
  copy(): void;
  vers(): string;
}

interface Info {
  version: string;
  NFT_Address: string;
  payTokenAddress: string;
}

export class SuperXEROX implements CopyMachine {
  token!: string;
  readonly version: string = 'v0.0.1';
  payToken!: string;
  nftToken!: string;

  constructor(payToken: string, NFTaddress?: string) {
    this.payToken = payToken
    if (NFTaddress !== undefined) {
      this.nftToken = NFTaddress; // any ERC721 token
    } else {
      // cryptokitty
      this.nftToken = CRYPTOKITTY_ADDRESS;
    }
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

export class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
  printX(): number {
    return this.x;
  }
}
