require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict enter occur slab chaos note snow punch hunt gloom slot gasp'; 
let testAccounts = [
"0x430aee7f9894542c4bcd956fd3d05c2492dad82c2945aa76272877ac67ce83b6",
"0x77e76f3efd6857be14f88144a935bf09a57f6d3bea9b512da9219fe867637c2d",
"0x0f1f48677d29c9535a208b9828de33d64d092de89a5e605484e9052bd9d8cf14",
"0xa88d17b0a0ff0f988f2810958619bd43c038c131cca0fb1dc5588021998dea16",
"0xdba67dc6f1885ff6f88efce41b5f3bdc5a99b77596c3873fc0f5e99df7983ea6",
"0xfb7deae0b4fc02894a7443226e5505e7e278c79b16ca1346b77538155aebfe3f",
"0x3945ff8b1a1f11cb824e718075f2d4c0a6bd97ea6896f7bd6973ade02e6f3987",
"0xcd1fba1acc786498d87aa6512cff1b5ef90fa1756b34ae0b45cf111d729218d6",
"0xcff10be41840ea9f50c76d9cd6a142a813c905556f31d165e59153aa85e831e4",
"0x836944ef81d886dbf06b1ee2548cda407d2ea5b68a099c0060151c3e25c35791"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

