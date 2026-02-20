# 📄 Blockchain-Based Document Verification System

A decentralized application (DApp) that enables secure issuance and verification of academic documents using blockchain technology.  
The system ensures authenticity, immutability, and transparency by storing document hashes on the Ethereum blockchain.

---

## 🚀 Features

- 🔐 Secure document issuance using blockchain
- 🧾 Document verification using cryptographic hash (bytes32)
- 👨‍💼 Admin-only document issuing
- 🌐 Ethereum Sepolia testnet deployment
- 🦊 MetaMask wallet integration
- ⚛️ React frontend with ethers.js

---

## 🏗️ System Architecture

![System Architecture](diagrams/system-architecture.png)

---

## 🛠️ Tech Stack

**Blockchain**
- Solidity
- Ethereum (Sepolia Testnet)
- Remix IDE

**Frontend**
- React.js
- ethers.js
- MetaMask

**Tools**
- Node.js
- Git & GitHub

---

## 📂 Project Structure
document-verification-blockchain/
│
├── contracts/
│ └── DocumentVerification.sol
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── README.md
│
├── diagrams/
│ └── system-architecture.png
│
├── screenshots/
│ ├── issue-document.png
│ └── verify-document.png
│
├── hash2.txt.txt
├── README.md
└── LICENSE


---

## ⚙️ How It Works

### 1️⃣ Issue Document
- Admin enters student name, document type, and document hash
- Hash is stored on blockchain
- Document becomes immutable and verifiable

### 2️⃣ Verify Document
- User enters document hash
- Smart contract returns document details if valid
- Ensures authenticity without revealing the original file

---

## 🧪 Smart Contract Functions

- `issueDocument(string, string, bytes32)`  
- `verifyDocument(bytes32)`

---

## 🖥️ Running the Frontend Locally

```bash
cd frontend
npm install
npm start

Open browser:

http://localhost:3000

Make sure MetaMask is connected to Sepolia testnet.

🔮 Future Improvements

📂 File upload with automatic hash generation

🧾 Issuer dashboard (issue documents via UI)

🌙 Dark mode UI

📱 Mobile responsive design

📦 IPFS integration for document storage

👨‍💻 Developer

Sudhir Shukla
B.Tech – Blockchain Specialization
