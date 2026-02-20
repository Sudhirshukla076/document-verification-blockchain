# Blockchain-Based Document Verification System

A decentralized application built using Solidity and Ethereum to securely issue and verify academic documents.

## Problem Statement
Traditional document verification systems are centralized, time-consuming, and prone to forgery.

## Solution
This project uses blockchain technology to store cryptographic hashes of documents, ensuring immutability and transparent verification.

## Features
- Admin-only document issuance
- Secure hash-based storage
- Public document verification
- Prevention of duplicate documents

## Tech Stack
- Solidity
- Ethereum
- Remix IDE
- MetaMask

## Project Structure
- contracts/ : Smart contracts
- screenshots/ : Execution proof
- diagrams/ : Architecture diagram

## How It Works
1. Issuer uploads document hash
2. Hash is stored on blockchain
3. Verifier checks authenticity using hash

## Future Scope
- IPFS integration
- NFT-based certificates
- Frontend using React and ethers.js