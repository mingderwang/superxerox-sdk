import {
  abi,
  ethers,
  Web3Provider,
  BigNumber,
  Contract,
  SuperXEROX,
  SuperXEROX_Contract_Address_Ropsten,
  ERC1155CopyToken,
} from 'superxerox-sdk';
declare let window: any;
window.onload = () => {
  const provider: Web3Provider = new ethers.providers.Web3Provider(window.ethereum);
  const superXeroXContract_ro = new Contract(SuperXEROX_Contract_Address_Ropsten, abi, provider);
  try {
    superXeroXContract_ro.getNetFlow().then((x: BigNumber) => {
      document.body.textContent = 'netflow = ' + x.toString();
    });
  } catch (error) {
    throw new Error(error);
  }
  const sx = new SuperXEROX();
  document.body.textContent = sx.version;
  const copyToken = new ERC1155CopyToken(provider);
  copyToken.balanceOf().then((x) => {
    console.log(x)
    //document.body.textContent = 'ming ' + x;
  });
};
