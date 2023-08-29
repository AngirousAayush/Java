class NFT {
    constructor(color , weight , laptop , hometown ) {
      this.color = color;
      this.weight = weight;
      this.laptop = laptop;
      this.hometown = hometown;
    }
  }
  
  const nfts = [];
  let count = 0;
  
  function mintNFT(color, weight , laptop , hometown) {
    const nft = new NFT(color, weight , laptop , hometown);
    nfts.push(nft);
    count++;
  }
  
  function listNFTs() {
    console.log("The list of total NFTs:\n");
    for (let i = 0; i < count; i++) {
      console.log(nfts[i]);
    }
  }
  
  function getTotalSupply() {
    console.log("The total number of NFTs created by the user:");
    console.log(count);
  }
  
  mintNFT("Red", "66kg", "ASUS", "Shimla");
  mintNFT("Blue", "80kg", "Acer", "Jaipur");
  
  listNFTs();
  getTotalSupply();