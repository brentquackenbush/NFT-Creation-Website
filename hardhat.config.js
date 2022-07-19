require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
};

// require('@nomiclabs/hardhat-waffle');
// require('dotenv').config();

// module.exports = {
//   solidity: '0.8.1',
//   networks: {
//     rinkeby: {
//       url: process.env.STAGING_ALCHEMY_KEY,
//       accounts: [process.env.PRIVATE_KEY],
//     },
//     mainnet: {
//       chainId: 1,
//       url: process.env.PROD_ALCHEMY_KEY,
//       accounts: [process.env.PRIVATE_KEY],
//     },
//   },
// };