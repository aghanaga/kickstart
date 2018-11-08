const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'random process error spray verb duck warm social arrow hire hire nephew',
  'https://rinkeby.infura.io/v3/06e8c94de5e54d64b2a35356ef710f64'
);

//https://rinkeby.etherscan.io/

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from Account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({data: compiledFactory.bytecode })
      .send({from:accounts[0], gas:'2900000'});

   console.log('Contract deployed to address : ', result.options.address);
};
deploy();
