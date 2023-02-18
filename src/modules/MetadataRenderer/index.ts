import { SDK } from "../../sdk";
import { ethers } from "ethers";
import FRSTMetadataRenderer from '../../contracts/FRSTMetadataRenderer.json';

export type MetadataRendererInit = {
  description: string;
  imageURI: string;
  animationURI: string;
}

export const getContract = async (
  sdk: SDK,
) => {
  const address = sdk.chain.addresses.FRSTMetadataRenderer;
  return new ethers.Contract(
    address,
    FRSTMetadataRenderer.abi,
    sdk.signerOrProvider
  );
}

export default {
  getContract,
};
