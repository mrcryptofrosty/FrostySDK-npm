# Welcome to the Frosty SDK

### Core Resources

[Protocol Documentation](): includes module descriptions, available  functions for each contract, and protocol deployment addresses.

[Protocol Repository](): you can find community discussions about new PR's and issues in the Discussions panel of this repository.

[SDK Repository](https://github.com/mrcryptofrosty/FrostySDK-npm)

[Starter Repo](https://github.com/mrcryptofrosty/Start-Frosty): the fastest way to publish your first application using Frosty is to fork this repository (NextJS, Tailwind, RainbowKit, FRSTSDK).

### Getting Started

`npm i frosty-sdk`

##### Example deployment of Frosty's 721A contract

    import { FrostySDK, edition, ipfs } from 'frosty-sdk';
    // wagmi is a core dependency to deploy contracts; FrostySDK get functions can be used without
     import { useSigner, useNetwork } from 'wagmi';

    // Define your metadata schema before deploying contract
      const deployFunction = async () => {
            const ipfsHash = await ipfs.createMetadata(metadata).then((res: any) => {
              return res
            });

            Frosty's defaults to storing metadata on-chain on L2's and on IPFS for Ethereum mainnet
            let onChainMetadata = null;
            let offChainMetadata = '';

            if ( chain.id === 1 || chain.id == 5 ) {
              offChainMetadata = `${ipfsHash.url}?`;
            } else {
              onChainMetadata = {
                metadata: ipfsHash?.data?.metadata || "",
              }
            }

            const sdk = new FrostySDK(chain.id, signer);

            let nft;
            try {
              nft = await edition.deploy(
                sdk,
                collectionName,
                symbol,
                editionSize,
                tokenPrice,
                maxTokenPurchase,
                creatorRoyalty,
                offChainMetadata,
                onChainMetadata,
              );
            } 
          }
        

For the artists of every industry 🤝
