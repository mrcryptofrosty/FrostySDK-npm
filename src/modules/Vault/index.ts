import { SDK } from "../../sdk";
import { ethers, Contract } from "ethers";
import FRSTVault from '../../contracts/FRSTVault.json';

const deploy = async (
  sdk: SDK,
  vaultDistributionTokenAddress: string,
  nftVaultKeyAddress: string,
  nftTotalSupply: number,
  unlockDate: number,
  onTxPending?: Function,
  onTxReceipt?: Function
) => {
  const deployTx = await sdk.contract.deployFRSTVault(
    vaultDistributionTokenAddress,
    nftVaultKeyAddress,
    nftTotalSupply,
    unlockDate
  );

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

  const address = receipt.events.find((x: any) => x.event === 'DeployFRSTVault').args.FRSTVault;
  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    FRSTVault.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
