import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import FRSTCrescendo from '../../contracts/FRSTCrescendo.json';
import { MetadataRendererInit } from '../MetadataRenderer';

const deploy = async (
  sdk: SDK,
  name: string,
  symbol: string,
  initialPrice: BigNumber,
  step1: BigNumber,
  step2: BigNumber,
  hitch: number,
  takeRateBPS: number,
  unlockDate: number,
  saleStart: number,
  royaltyBPS: number,
  contractURI: string,
  metadataURI: string,
  metadataRendererInit: MetadataRendererInit | null,
  onTxPending?: Function,
  onTxReceipt?: Function,
  parentIP: string = ethers.constants.AddressZero
) => {
  const encodedMetadata = metadataRendererInit != null
    ? ethers.utils.AbiCoder.prototype.encode(
        ['string', 'string', 'string'],
        [
          metadataRendererInit.description,
          metadataRendererInit.imageURI,
          metadataRendererInit.animationURI
        ]
      )
    : [];

  const deployTx = await sdk.contract.deployFRSTCrescendo(
    {
      name,
      symbol,
      initialPrice,
      step1,
      step2,
      hitch,
      takeRateBPS,
      unlockDate,
      saleStart,
      royaltyBPS,
    },
    {
      contractURI,
      metadataURI,
      metadataRendererInit: encodedMetadata,
      parentIP
    }
  );

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

  const address = receipt.events.find((x: any) => x.event === 'DeployFRSTCrescendo').args.FRSTCrescendo;
  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    FRSTCrescendo.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
