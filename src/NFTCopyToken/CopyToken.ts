import { TokenInfo, ICopyToken} from './Interface'

export class CopyToken implements ICopyToken {
    copyToken: string;
    version!: string;
    
    constructor(TokenAddress: string, Version?: string) {
        this.copyToken = TokenAddress; // any ERC-1155 tokens
        if (Version !== undefined) {
            this.version = Version; // reserved
        } else {
            this.version = 'unknown'
        }
      }
    getVersion(): string {
        return this.version
    }
    balanceOf(): Promise<string> {
        throw new Error('Method not implemented.');
    }
    getInfo(): TokenInfo {
        return { contractAddress: this.copyToken,
        version: this.version}
    }
    
}