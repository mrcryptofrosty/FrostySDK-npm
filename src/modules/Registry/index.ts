import { SDK } from "../../sdk";
import { ethers } from "ethers";
import FRSTRegistry from '../../contracts/FRSTRegistry.json';

const getContract = async (
  sdk: SDK,
) => {
  const address = sdk.chain.addresses.FRSTRegistry;
  return new ethers.Contract(
    address,
    FRSTRegistry.abi,
    sdk.signerOrProvider
  );
}

const query = async (
  sdk: SDK,
  address: string,
) => {
  const registry = await getContract(sdk);
  return registry.query(address);
}

export default {
  query,
  getContract,
};
