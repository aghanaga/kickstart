import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //we are in browser window
  web3 = new Web3(window.web3.currentProvider);
} else {
  //we are on the server OR user is not running metamask
  const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/06e8c94de5e54d64b2a35356ef710f64'
  );
  web3 = new Web3(provider);

}

export default web3;
