import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import FRSTRentalMarket from '../../contracts/FRSTRentalMarket.json';

const getContract = async (
  sdk: SDK,
) => {
  const address = sdk.chain.addresses.FRSTRentalMarket;
  return new ethers.Contract(
    address,
    FRSTRentalMarket.abi,
    sdk.signerOrProvider
  );
}

export default {
  getContract
};
