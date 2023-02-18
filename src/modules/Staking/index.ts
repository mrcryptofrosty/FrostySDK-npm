import { SDK } from "../../sdk";
import { ethers, Contract } from "ethers";
import FRSTStaking from '../../contracts/FRSTStaking.json';

const deploy = async (
  sdk: SDK,
  nft: string,
  token: string,
  vaultDuration: number,
  totalSupply: number,
  onTxPending?: Function,
  onTxReceipt?: Function
) => {
  const deployTx = await sdk.contract.deployFRSTStaking(
    nft,
    token,
    vaultDuration,
    totalSupply
  );

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

  const address = receipt.events.find((x: any) => x.event === 'DeployFRSTStaking').args.FRSTStaking;
  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    FRSTStaking.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
