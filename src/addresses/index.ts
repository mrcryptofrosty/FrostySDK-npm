import mainnet from './1-mainnet.json';
import goerli from './5-goerli.json';
import polygon from './137-polygon.json';
import polygonMumbai from './80001-polygonMumbai.json';
import optimism from './10-optimism.json';
import optimismGoerli from './420-optimismGoerli.json';
import arbitrum from './42161-arbitrum.json';
import arbitrumGoerli from './421613-arbitrumGoerli.json';
import hardhat from './31337-hardhat.json';
import arbitrumSepolia from './421614-arbitrumSepolia.json';
import optimismSepolia from './11155420-optimismSepolia.json';
import lineaSepolia from './59141-lineaSepolia.json';
import sepolia from './11155111-sepolia.json';


export type Addresses = {
  FRSTSDK: string;
  FRST721A: string;
  FRST4907A: string;
  FRSTCrescendo: string;
  FRSTVault: string;
  FRSTStaking: string;
  FRSTMetadataRenderer: string;
  FRSTRegistry: string;
  FRSTVaultNFT: string;
  FRSTRentalMarket: string;
  SplitMain: string;
}

export const addresses = {
  mainnet,
  goerli,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  hardhat,
  arbitrumSepolia,
  optimismSepolia,
  lineaSepolia,
  sepolia,
}
