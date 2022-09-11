require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain hour install industry fortune sport'; 
let testAccounts = [
"0x79a87a2ac30f9835d68601aa592a57f0b97550e3e69d0417c5867948d09918b5",
"0x56fc22ff83ac828032f8b5b74d679ce4164eea651240c46fc2fbae9467ca1ed1",
"0x51096fba5833a9fcd5466783edf304b8594c45262bc5cb9cc5bb8eef8cf86b7d",
"0x41203f59a31c8dc8eeaf4b52134ff32d82f86aa24cfa328ceed885a835c6a18a",
"0xfe13a28f3b3a632ac8faabdd58406b2a068b6834c062c21d06e4d305a5360cad",
"0x7ddb472d77f7abb135da96aea17b2aeae0f31c06c8b8bc8ec9b57c4476df6f83",
"0x20eb5c76aa946caddef81b3e70e7a6b9efbfabc6254cf0d7d24f610900403e38",
"0x5bfc0a0ba2ca0c8b914d99c0abdc6a5cbb9126a1aa95adf5779f37358842b7b8",
"0xfcf281cb49b35503a5b451bd4c11bfc63b1569a821e56485e0ef960872fb3a36",
"0x7ab640c8678b8f0b030ccae74081b903fefc84d324ce710d0023d15e08459038"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

