export interface TokenInfo {
  version: string;
  contractAddress: string;
}

export interface ICopyToken {
  balanceOf(): Promise<string> // could be a bigNumber
  getInfo(): TokenInfo
  getVersion(): string
}
