const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "dentist enforce hundred margin control purpose patient learn reform oven volcano punch";

module.exports = {
  networks: {
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/4f3eb8bbba8d424ca90102bafbf14dbe")
      },
      network_id: 42
    }
  }
};
