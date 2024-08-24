import React from "react";
import EthIcon from "../eth.svg"; 

function LumiPage() {
  return (
    <div style={styles.LumiPage}>
      <header style={styles.header}>
        
       
      </header>
      <main style={styles.main}>
        <div style={styles.intro}>
          <h1 style={styles.heading}>Meet Lumi</h1>
          <p style={styles.paragraph}>Find and trade your favourite coins on a fully on-chain Exchange.</p>
          <button style={styles.discordButton}>Join our Discord</button>
        </div>
        <div style={styles.tradeBox}>
          <div style={styles.tradeBoxItem}>
            <label>You're selling</label>
            <div style={styles.tradeInput}>
              <img src={EthIcon} alt="Ethereum" style={styles.ethIcon} />
              <span>ETH</span>
              <span style={styles.ethAmount}>10.00 ETH</span>
              <span style={styles.usdAmount}>$2762.2</span>
            </div>
          </div>
          <div style={styles.tradeBoxItem}>
            <label>You're receiving</label>
            <div style={styles.tradeInput}>
              <span>USDC</span>
              <span style={styles.errorText}>Failed to fetch</span>
            </div>
          </div>
          <div style={styles.tradeFooter}>
            <div style={styles.refreshQuote}>
              Refresh quote <span style={styles.quotePercentage}>0.01%</span>
            </div>
            <button style={styles.swapButton}>Swap</button>
          </div>
        </div>
      </main>
      
    </div>
  );
}

const styles = {
  lumiPage: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#1c1c1c", // Dark grey background
    color: "#e0e0e0", // Light grey text
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "40px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#e0e0e0", // Light grey text for links
    fontWeight: "bold",
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
  },
  intro: {
    maxWidth: "500px",
  },
  heading: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  discordButton: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#1c1c1c", // Dark background text color for contrast
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tradeBox: {
    backgroundColor: "#2e2e2e", // Dark grey background for trade box
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Darker shadow for better contrast
    width: "400px",
  },
  tradeBoxItem: {
    color:"white",
    marginBottom: "20px",
  },
  tradeInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#3c3c3c", // Slightly lighter grey for inputs
    borderRadius: "5px",
  },
  ethIcon: {
    color:"white",
    height: "20px",
    marginRight: "10px",
  },
  ethAmount: {
    color:"white",
    marginLeft: "10px",
  },
  usdAmount: {
    color:"white",
    marginLeft: "10px",
  },
  errorText: {
    color:"white",
    marginLeft: "10px",
  },
  tradeFooter: {
    color:"white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  refreshQuote: {
    color:"white",
  },
  quotePercentage: {
    fontSize: "12px",
    color:"white",

  },
  swapButton: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#1c1c1c", // Dark background text color for contrast
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    color: "gray",
  },
};

export default LumiPage;
