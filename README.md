Title: Time-Locked Payment Smart Contract
Description: A smart contract on the Bitcoin SV blockchain using sCrypt that locks funds until a specified block height is reached, after which the recipient can claim the funds. The contract showcases the ability to create real-world, trustless escrow systems or deferred payments.
Tech Stack:
Smart Contract Language: sCrypt (compiled to Bitcoin Script).
Bitcoin SV Blockchain: For executing and verifying the contract.
Frontend: HTML, CSS, JavaScript (optional, for interacting with the contract).

Install sCrypt Tools:
npm install -g scrypt-cli

Compile the contract:
scryptc compile TimeLockedPayment.scrypt
