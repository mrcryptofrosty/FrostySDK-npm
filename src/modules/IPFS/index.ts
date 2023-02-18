import { NFTStorage } from "nft.storage";

const createMetadata = async (metadata: any) => {
  const client = new NFTStorage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIzM0VGNzA3N0QyQzZGMjZCMWE4M2Q0M2ZmNEMyZjE3NTk1YjFhZjMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3Njc1NTI0NzU4MCwibmFtZSI6ImZyb3N0eS1zZGsifQ.eM546SP4b_4gnjMAHheTj1esIixi3DP52RdYq9zCJuI",
  });
  const ipfs = await client
    .store(metadata)
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      return { error: error.message };
    });
  return ipfs;
};

export default {
  createMetadata
};
