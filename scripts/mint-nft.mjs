const CONTRACT_ADDRESS = "0x81C7b1a866F79c15BD62489a4D1b9Efb497E45E4"
const META_DATA_URL = "ipfs://bafyreifa5d5arnnqjse5474qfdgy7ohlm7a27a3bs6llpihff4eqxogc5a/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
    const [owner] = await ethers.getSigners()
    await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
    console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });