// TimeLockedPayment_test.js

const { buildContractClass, bsv, PubKey, Sig, signTx, toHex } = require('scryptlib');
const { loadDesc, deployContract, callContract } = require('scrypttest');

// Load the compiled contract description
const contractDesc = loadDesc('TimeLockedPayment_desc.json');

// Initialize the contract
const TimeLockedPayment = buildContractClass(contractDesc);

// Test Variables
const recipientPubKey = new PubKey('recipient-public-key-hex');
const unlockBlockHeight = 600000;  // Block height at which the funds are unlocked
const recipientPrivateKey = new bsv.PrivateKey.fromWIF('recipient-private-key-wif');

// Instantiate the contract
const timeLockedPayment = new TimeLockedPayment(recipientPubKey, unlockBlockHeight);

// Simulate the transaction at block height 600001
const tx = new bsv.Transaction()
    .setLockTime(600001)
    .from(utxo)  // UTXO that funds the contract
    .to(recipientPubKey.toAddress(), 1000);

// Sign the transaction
const sig = signTx(tx, recipientPrivateKey);

// Test the claim function
const result = timeLockedPayment.claim(Sig(sig)).verify();
console.log('Test Passed:', result.success);
