import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./contract";

function App() {
  const [account, setAccount] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not installed");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  const verifyDocument = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    const data = await contract.verifyDocument(hash);
    setResult(data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Document Verification DApp</h2>

      <button onClick={connectWallet}>
        {account ? "Wallet Connected" : "Connect Wallet"}
      </button>

      <br /><br />

      <input
        placeholder="Enter document hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        style={{ width: "400px" }}
      />

      <br /><br />

      <button onClick={verifyDocument}>Verify Document</button>

      {result && (
        <div>
          <p><b>Student:</b> {result[0]}</p>
          <p><b>Document:</b> {result[1]}</p>
          <p><b>Issued By:</b> {result[2]}</p>
          <p><b>Issued On:</b> {new Date(Number(result[3]) * 1000).toString()}</p>
          <p><b>Valid:</b> {result[4] ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default App;