import { Addresses, addresses } from '../addresses';

export type Chain = {
  id: number;
  network: string;
  addresses: Addresses;
}

const mainnet: Chain = {
  id: 1,
  network: 'mainnet',
  addresses: addresses.mainnet,
}

const goerli: Chain = {
  id: 5,
  network: 'goerli',
  addresses: addresses.goerli,
}

const polygon: Chain = {
  id: 137,
  network: 'polygon',
  addresses: addresses.polygon,
}

const polygonMumbai: Chain = {
  id: 80_001,
  network: 'polygonMumbai',
  addresses: addresses.polygonMumbai,
}

const optimism: Chain = {
  id: 10,
  network: 'optimism',
  addresses: addresses.optimism,
}

const optimismGoerli: Chain = {
  id: 420,
  network: 'optimismGoerli',
  addresses: addresses.optimismGoerli,
}

const arbitrum: Chain = {
  id: 42_161,
  network: 'arbitrum',
  addresses: addresses.arbitrum,
}

const arbitrumGoerli: Chain = {
  id: 421_613,
  network: 'arbitrumGoerli',
  addresses: addresses.arbitrumGoerli,
}

const localhost: Chain = {
  id: 1_337,
  network: 'localhost',
  addresses: addresses.hardhat,
}

const hardhat: Chain = {
  id: 31_337,
  network: 'localhost',
  addresses: addresses.hardhat,
}

const withId = (chainId: number) => {
  const match = allChains.find((chain) => chain.id == chainId);
  return match || chain.mainnet
};

export const chain = {
  mainnet,
  goerli,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  hardhat,
  localhost,
  withId,
}

export const allChains = [
  mainnet,
  goerli,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  hardhat,
  localhost,
];
