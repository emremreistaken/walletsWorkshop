import { Wallet } from 'ethers';
const mnemonic = 'radar blur cabbage chef fix engine embark joy scheme fiction master release';

const randomWallet = new Wallet.createRandom();
console.log('\n', `Rastgele oluşturduğumuz bir cüzdanın adresi: ${randomWallet.address}`);
console.log(`Rastgele oluşturduğumuz cüzdanın private keyi: ${randomWallet.privateKey}`, '\n');

const hdWalletAcc1 = new Wallet.fromMnemonic(mnemonic);
console.log(`HD wallet 1. account address: ${hdWalletAcc1.address}`);
console.log(`HD wallet 1. account private key: ${hdWalletAcc1.privateKey}`, '\n');

// Second account from a mnemonic
const pathAcc2 = "m/44'/60'/1'/0/0";
const hdWalletAcc2 = new Wallet.fromMnemonic(mnemonic, pathAcc2);
console.log(`HD wallet 2. account address: ${hdWalletAcc2.address}`);
console.log(`HD wallet 2. account private key: ${hdWalletAcc2.privateKey}`, '\n');

// Third account from a mnemonic
const pathAcc3 = "m/44'/60'/2'/0/0";
const hdWalletAcc3 = new Wallet.fromMnemonic(mnemonic, pathAcc3);
console.log(`HD wallet 3. account address: ${hdWalletAcc3.address}`);
console.log(`HD wallet 3. account private key: ${hdWalletAcc3.privateKey}`, '\n');

const recoverFromPrivateKey = new Wallet(hdWalletAcc3.privateKey);
console.log(`HD wallet 3. account private keyinden türetilen cüzdanın adresi: ${recoverFromPrivateKey.address}`);
